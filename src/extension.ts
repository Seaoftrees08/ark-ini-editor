import * as vscode from 'vscode';
import { IniParser } from './iniPerser';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "ark-ini-editor" is now active!');
  
	//arksettings
	const akrsettingsDisposable = vscode.commands.registerCommand('ark-ini-editor.arkSettings', () => {
		vscode.window.showInformationMessage('Hello World from ark-ini-editor!');

    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showWarningMessage('File is not open, please open Game.ini or GameUserSettings.ini.');
      return;
    }

    const filePath = editor.document.fileName;
    if (!(filePath.toLowerCase().endsWith('game.ini') || filePath.toLowerCase().endsWith('gameusersettings.ini'))) {
      vscode.window.showWarningMessage('This command can only be executed when Game.ini or GameUserSettings.ini is open.');
      return;
    }
    const fileName = filePath.split('/').pop() || '';

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
    const iniPerser = new IniParser(fileName, text);

    // Set the webview content
    panel.webview.html = getWebviewContent(styleUri, scriptUri);

    // Send initial data to the webview
    panel.webview.onDidReceiveMessage(async (message) => {
      console.log('extention-debug: message received in webview: ', message);//debug

      if (message.command === 'bAllowUnlimitedRespecs') {
        const value = message.value;

        // bAllowUnlimitedRespecs の値を更新または追加
        iniPerser.setValue('ServerSettings', 'bAllowUnlimitedRespecs', value as string);

        // 更新内容を保存
        const editedText = iniPerser.getAllSettingsText();
        const edit = new vscode.WorkspaceEdit();
        const fullRange = new vscode.Range(
          document.lineAt(0).range.start,
          document.lineAt(document.lineCount - 1).range.end
        );
        edit.replace(document.uri, fullRange, editedText);
        await vscode.workspace.applyEdit(edit);
        
        vscode.window.showInformationMessage(`bAllowUnlimitedRespecs=${value} に更新しました`);


      }
    });

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
