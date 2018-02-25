'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    const editor = vscode.window.activeTextEditor;

    if (!editor) {
        return; // No open text editor
    }

    let toUpperCaseDisposable = vscode.commands.registerCommand('extension.toUpperCase', () => {
        editor.edit(editBuilder => {
            const selection = editor.selection;
            const selectedText = editor.document.getText(selection);
            editBuilder.replace(selection, selectedText.toUpperCase());
        });
    });

    let toReduxActionTypeStringDisposable = vscode.commands.registerCommand('extension.toReduxActionTypeString', () => {
        editor.edit(editBuilder => {
            const selection = editor.selection;
            const selectedText = editor.document.getText(selection);
            editBuilder.replace(selection, selectedText.split(' ').join('_').toUpperCase());
        });
    });

    context.subscriptions.push(toUpperCaseDisposable, toReduxActionTypeStringDisposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}