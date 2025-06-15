import * as vscode from 'vscode';
import { IniParser } from './iniPerser';

export function activate(context: vscode.ExtensionContext) {
  
    // 最後にアクティブだったエディターを保持する変数
    let lastActiveEditor = vscode.window.activeTextEditor;

    // arksettings
    const akrsettingsDisposable = vscode.commands.registerCommand('ark-ini-editor.arkSettings', () => {
        vscode.window.showInformationMessage('ark-ini-editor! Activated!');

        let editor = vscode.window.activeTextEditor;
        if (!editor) {
          vscode.window.showWarningMessage('File is not open, please open Game.ini or GameUserSettings.ini.');
          return;
        }

        // 初期状態で最後のエディターとして設定
        lastActiveEditor = editor;

        const fileName = editor.document.fileName.split(/[\\/]/).pop() || '';

        const panel = vscode.window.createWebviewPanel(
          'arkSettings',
          'ARK Settings',
          vscode.ViewColumn.One,
          {
            enableScripts: true
          }
        );

        const scriptUri = panel.webview.asWebviewUri(vscode.Uri.joinPath(
          context.extensionUri, 'out', 'main.js'
        ));
        const styleUri = panel.webview.asWebviewUri(vscode.Uri.joinPath(
          context.extensionUri, 'media', 'style.css'
        ));

        // Parse the ini file
        const document = editor.document;
        const text = document.getText();
        let iniPerser = new IniParser(fileName, text);

        // Set the webview content
        panel.webview.html = getWebviewContent(styleUri, scriptUri);

        // Webview からのメッセージ受信
        panel.webview.onDidReceiveMessage(async (message) => {
          if (message.command === 'ready') {
            panel.webview.postMessage({
              command: 'init',
              data: {
                fileName: iniPerser.getFileName(),
                settings: iniPerser.getAllSettingsText()
              }
            });
          } else if (message.command === 'updateIni') {
            const value = message.value;
            // 最後にアクティブだったエディターを使用
            if (!lastActiveEditor) {
              vscode.window.showErrorMessage('最後にアクティブだったエディターが見つかりません。');
              return;
            }
            const currentDocument = lastActiveEditor.document;
            const currentFileName = currentDocument.fileName.split(/[\\/]/).pop() || '';
            if (value) {
              iniPerser = new IniParser(currentFileName, value);
            }
            const editedText = iniPerser.getAllSettingsText();
            const edit = new vscode.WorkspaceEdit();
            const fullRange = new vscode.Range(
              currentDocument.lineAt(0).range.start,
              currentDocument.lineAt(currentDocument.lineCount - 1).range.end
            );
            edit.replace(currentDocument.uri, fullRange, editedText);
            await vscode.workspace.applyEdit(edit);
          }
        });

        // エディターが変わったときのリスナー
        const activeEditorListener = vscode.window.onDidChangeActiveTextEditor((newEditor) => {
          // Webview は対象外にするため、uri.scheme で判定
          if (newEditor && newEditor.document.uri.scheme !== 'vscode-webview') {
            lastActiveEditor = newEditor;
            const newFilePath = newEditor.document.fileName;
            const newFileName = newFilePath.split(/[\\/]/).pop() || '';
            const newText = newEditor.document.getText();
            iniPerser = new IniParser(newFileName, newText);
            panel.webview.postMessage({
              command: 'init',
              data: {
                fileName: iniPerser.getFileName(),
                settings: iniPerser.getAllSettingsText()
              }
            });
          }
        });
        context.subscriptions.push(activeEditorListener);

        // iniファイル手動保存時のリスナー
        const saveDocumentListener = vscode.workspace.onDidSaveTextDocument((document) => {
          const savedFileName = document.fileName.split(/[\\/]/).pop() || '';
          // 最後に使用していたファイルと一致している場合のみ再読み込み
          if (savedFileName === iniPerser.getFileName()) {
            const newText = document.getText();
            iniPerser = new IniParser(savedFileName, newText);
            panel.webview.postMessage({
              command: 'init',
              data: {
                fileName: iniPerser.getFileName(),
                settings: iniPerser.getAllSettingsText()
              }
            });
            vscode.window.showInformationMessage(`${savedFileName} was reloaded due to manual changes.`);
          }
        });
        context.subscriptions.push(saveDocumentListener);
        
    });
    context.subscriptions.push(akrsettingsDisposable);

}

export function deactivate() {}

function getWebviewContent(styleUri: vscode.Uri, scriptUri: vscode.Uri): string {
  return `
  <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href="${styleUri}" rel="stylesheet" />
      <title>ARK Settings</title>
    </head>
    <body>
      <div id="root"></div>
      <script src="${scriptUri}"></script>
    </body>
    </html>
`;
}
