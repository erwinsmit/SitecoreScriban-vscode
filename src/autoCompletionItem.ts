/*---------------------------------------------------------
 * Copyright (C) 2019 - Adam Najmanowicz. All rights reserved.
 *--------------------------------------------------------*/

import * as vscode from 'vscode';
import { ScribanSnippet } from './types';
import { getCodeBlockFromSnippet } from './autoCompletion';
import { lineHasPipe, snippetVariableCleanup, isInScriban } from './regularExpressions';

export function snippetCompletion(snippets: ScribanSnippet[], linePrefix: string, results: vscode.CompletionItem[], kind: vscode.CompletionItemKind, helpUrl: String) {
	
	for (let snippet of snippets) {
		const commitCharacterCompletion = new vscode.CompletionItem(snippet.name);
		commitCharacterCompletion.kind = kind;
		commitCharacterCompletion.commitCharacters = ['.'];
		commitCharacterCompletion.command = { command: 'editor.action.triggerSuggest', title: 'Re-trigger completions...' };
		var inMoustaches = isInScriban.test(linePrefix);
		//commitCharacterCompletion.detail = snippet.description;		

		// for snippets that can only be insertedin special context like "offset:" in "for" loop.
		if (snippet.validationRegEx !== "") {
			var validationRegex = new RegExp(snippet.validationRegEx);
			if (!validationRegex.test(linePrefix)) {
				continue;
			}
		}

		let description = new vscode.MarkdownString(snippet.description+"... [more]("+ helpUrl +")");
		if (inMoustaches) {

			// if inside moustache block {{ }}					
			if (lineHasPipe.test(linePrefix)) {
				// if inside moustache block after a pipe {{ ... |
				if (snippet.pipeTemplate === "") {
					continue;
				}
				commitCharacterCompletion.insertText = new vscode.SnippetString(snippet.pipeTemplate + " ");
				commitCharacterCompletion.documentation = description.appendCodeblock(getCodeBlockFromSnippet(snippet.pipeTemplate)).appendCodeblock("\n \n "); // (snippet.pipeCodeBlock);
			} else {
				// if not after pipe, just within moustaches {{ ... }}
				//template must be wrapped with moustaches - those are used inside of pure-HTML snippets

				let template = snippet.template;
				if (Array.isArray(template)) {
					template = template.join("\n");
				}

				if (template === "" || template.startsWith("{")) {
					continue;
				}
				commitCharacterCompletion.insertText = new vscode.SnippetString(template);
				commitCharacterCompletion.documentation = description.appendCodeblock(getCodeBlockFromSnippet(template)).appendCodeblock("\n \n ") // snippet.codeBlock);
			}
		} else {

			let documentation;
			if (typeof snippet.template === 'string') {
				commitCharacterCompletion.insertText = new vscode.SnippetString("{{ " + snippet.template + " }}");
				documentation = getCodeBlockFromSnippet(snippet.template);
			} else {
				commitCharacterCompletion.insertText = new vscode.SnippetString(snippet.template.join("\n"));
				documentation = getCodeBlockFromSnippet(snippet.template.join("\n"), false);
			}

			commitCharacterCompletion.documentation = description.appendCodeblock(documentation).appendCodeblock("\n "); // snippet.codeBlock);
		}
		results.push(commitCharacterCompletion);
	}
}

export function objectFunctionCompletion(objectName: string, methodName: string, template: string, documentation: string, icon: vscode.CompletionItemKind = vscode.CompletionItemKind.Method): vscode.CompletionItem {
	const completion = new vscode.CompletionItem(methodName);
	completion.documentation = new vscode.MarkdownString(documentation).appendCodeblock("{{ " + objectName + template.replace(snippetVariableCleanup, "") + " }}");
	completion.kind = icon;
	completion.insertText = new vscode.SnippetString(template);
	return completion;
}
