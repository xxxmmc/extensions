"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
const path_1 = require("path");
const vscode_1 = require("vscode");
const p1 = async () => { };
const p2 = async () => { };
const p3 = async () => { };
async function hello1(progress) {
    await p1;
}
async function hello2(progress) {
    await p2;
}
async function hello3(progress) {
    await p3;
}
async function activate(context) {
    context.subscriptions.push(vscode_1.commands.registerCommand('extension.startTask', () => {
        vscode_1.window.withProgress({
            location: vscode_1.ProgressLocation.Notification,
            title: "I am long running!",
            cancellable: true
        }, async (progress) => {
            progress.report({ increment: 0, message: "searching all places" });
            await Promise.all([hello1(progress), hello2(progress), hello3(progress)]).catch(function (err) {
                console.log(err);
            });
            progress.report({ increment: 100, message: "searching done" });
            (0, path_1.resolve)();
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
exports.activate = activate;
//# sourceMappingURL=extension.js.map