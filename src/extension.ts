// Open http://2tothe5th.dashboard.hax/
// part of cerner_2^5_2019
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "2-5-dashboard" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.2-5-dashboard', () => {
		// The code you place here will be executed every time your command is executed

		vscode.env.openExternal(vscode.Uri.parse("http://2tothe5th.dashboard.hax/"));

	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() { }
