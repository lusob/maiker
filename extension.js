// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

const { Configuration, OpenAIApi } = require("openai");

const configuration = vscode.workspace.getConfiguration('maiker');
const openaiApiKey = configuration.get('openaiApi');
const promptContext = configuration.get('promptContext');

const openai_configuration = new Configuration({
	apiKey: openaiApiKey,
});

const openai = new OpenAIApi(openai_configuration);


// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "maiker" is now active!');


	// Define command to trigger code generation
	const generateProjectCommand = vscode.commands.registerCommand('maiker.generateProject', async () => {
		try {
			// Get user prompt
			const userInput = await vscode.window.showInputBox({ prompt: 'Describe here the project you want to create' });
			console.log("User prompt: " + userInput)
			// Show progress indicator
			await vscode.window.withProgress({
				location: vscode.ProgressLocation.Notification,
				title: 'Generating project... (it may take a few minutes)',
				cancellable: false
			}, async () => {
				try {
					const completion = await openai.createChatCompletion({
						model: "gpt-3.5-turbo",
						messages: [
							{ "role": "system", "content": `${promptContext}` },
							{ "role": "user", "content": userInput }],
						temperature: 0
					});
					var msg_content = completion.data.choices[0].message.content
					
					// Preserve newlines, etc. - use valid JSON
					msg_content = msg_content.replace(/`/g, "'").replace(/\\s/g, "\\s");

					const generatedCode = JSON.parse(msg_content);
					// Create directories for each file
					for (const [filename, contents] of Object.entries(generatedCode)) {
						//const directory = filename.substring(0, filename.lastIndexOf('/'));
						var file_path = path.join(vscode.workspace.workspaceFolders[0].uri.path, filename);

						fs.writeFileSync(file_path, contents);
					}

					// Show success message to user
					vscode.window.showInformationMessage('Code generation successful!');
				} catch (error) {
					if (error.response) {
						console.log(error.response.status);
						console.log(error.response.data);
					} else {
						console.log(error.message);
					}
					vscode.window.showErrorMessage('Code generation failed: ' + error.message);
				}
			});
		} catch (error) {
			// Show error message to user
			vscode.window.showErrorMessage('Code generation failed: ' + error.message);
		}
	});

	context.subscriptions.push(generateProjectCommand);
}

// This method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}


