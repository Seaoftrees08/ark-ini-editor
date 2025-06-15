import * as vscode from 'vscode';
import { IniParser } from './iniPerser';

export function activate(context: vscode.ExtensionContext) {
  
    // arksettings
    const akrsettingsDisposable = vscode.commands.registerCommand('ark-ini-editor.arkSettings', () => {
        vscode.window.showInformationMessage('ark-ini-editor! Activated!');

        const editor = vscode.window.activeTextEditor;
        if (!editor) {
          vscode.window.showWarningMessage('File is not open, please open Game.ini or GameUserSettings.ini.');
          return;
        }

        // const filePath = editor.document.fileName;
        // if (!(filePath.toLowerCase().endsWith('game.ini') || filePath.toLowerCase().endsWith('gameusersettings.ini'))) {
        //   vscode.window.showWarningMessage('This command can only be executed when Game.ini or GameUserSettings.ini is open.');
        //   return;
        // }
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

        // ハンドラーで "ready" を待つ
        panel.webview.onDidReceiveMessage(async (message) => {

          if (message.command === 'ready') {
            // React側からの準備完了通知を受けたら、initメッセージを送信
            panel.webview.postMessage({
              command: 'init',
              data: {
                fileName: iniPerser.getFileName(),
                settings: iniPerser.getAllSettingsText()
              }
            });
          } else if (message.command === 'updateIni') {
            const value = message.value;
            if(value){
              iniPerser = new IniParser(fileName, value);
            }

            // 更新内容を保存
            const editedText = iniPerser.getAllSettingsText();
            const edit = new vscode.WorkspaceEdit();
            const fullRange = new vscode.Range(
              document.lineAt(0).range.start,
              document.lineAt(document.lineCount - 1).range.end
            );
            edit.replace(document.uri, fullRange, editedText);
            await vscode.workspace.applyEdit(edit);
            
            vscode.window.showInformationMessage(`Updated ${fileName} successfully!`);
          }
        });

        // アクティブエディターが変わった時に、iniPerserを再生成しWebviewに更新を通知する機能を追加
        const activeEditorListener = vscode.window.onDidChangeActiveTextEditor((newEditor) => {
          if (newEditor) {
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
