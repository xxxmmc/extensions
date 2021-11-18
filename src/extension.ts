/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
import { resolve } from 'path';
import { ExtensionContext, StatusBarAlignment, window, StatusBarItem, Selection, workspace, TextEditor, commands, ProgressLocation, Progress } from 'vscode';
const p1 = async () => {}
const p2 = async () => {}
const p3 = async () => {}

async function hello1(progress:Progress<{
    message?: string | undefined;
    increment?: number | undefined;
}>)
 {
	await p1;
}

async function hello2 (progress:Progress<{
    message?: string | undefined;
    increment?: number | undefined;
}>)
	{
	await p2;
}

async function hello3 (progress:Progress<{
    message?: string | undefined;
    increment?: number | undefined;
}>) {
	await p3;
}
export async function activate(context: ExtensionContext) {


	
	context.subscriptions.push(commands.registerCommand('extension.startTask', () => {
		window.withProgress({
			location: ProgressLocation.Notification,
			title: "I am long running!",
			cancellable: true
		},  async (progress) => {
			
			progress.report({ increment: 0, message: "searching all places" });
			await Promise.all([hello1(progress),hello2(progress),hello3(progress)]).catch(function(err){
				console.log(err);
			});
			progress.report({ increment: 100, message: "searching done"});
			resolve();
			// setTimeout(() => {
			// 	console.log(1234);
			// }, 1000);

			// setTimeout(() => {
			// 	console.log("enter 40");
			// }, 2000);

			// setTimeout(() => {
			// 	console.log("enter 50");
			// }, 3000);

			// const p = new Promise<void>(resolve => {
			// 	console.log("enter outside p");
			// 	setTimeout(() => {
			// 		console.log("enter insde p");
			// 		resolve();
			// 	}, 5000);
			// });

			// return p;
		});
	}));


}