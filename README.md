![image](./assets/maiker-logo.png)

M**ai**ker is a VS Code extension that generates a project based on a user prompt using OpenAI API to generate the content.

## 🎥 Demo April 24th 2023

https://user-images.githubusercontent.com/480507/234051170-a1c227a9-e1bc-4ee9-b8c6-dbdcf5ab527d.mp4

## ✨ Features

Maiker use an OpenAI model to generate a code project based on the user prompt. The files will be returned in separated files.

## ⚙️ Requirements

Maiker requires an OpenAI API key to use the OpenAI API. To get an API key, you can sign up for the OpenAI API beta program on the OpenAI website.

## 🛠️ Installation

To install the m**ai**ker extension, follow these steps:

1. Open Visual Studio Code.

2. Open the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the VS Code window.

3. Search for `maiker` in the search bar.

4. Click the `Install` button next to the `maiker` extension in the search results.

5. Wait for the installation to complete.

6. Reload Visual Studio Code.

7. Use the `maiker.generateProject` command to generate a new project typing a description.

Enjoy!

## ⚙️ Extension Settings

This extension contributes the following settings:

* `maiker.openaiApi`: Your OpenAI API key. To obtain an API key, follow the instructions [here](https://beta.openai.com/signup/).
* `maiker.promptContext`: The context string to add to the user input as to create the final prompt.

## ⚠️ Limitations

It's a prototype, not polished product so it may not perform well in complex business scenarios

A very intensive use can lead to high expenses, monitor your account and set API key limits to avoid scares

## 🐞 Known Issues

Maiker may occasionally generate incorrect or irrelevant content based on the user's input. Additionally, maiker may encounter errors when calling the OpenAI API if the API key is invalid or if there are issues with the OpenAI API service.

Due to the limits of the model's context size, the generated project cannot have many lines of code, although it is still useful to create personalized boilerplates of complex projects

## 📝 Release Notes

### 1.0.0

Initial release of maiker.

### 1.1.0

Added support for generating custom filenames based on user input.

### 1.2.0

Added support for generating content for multiple files simultaneously.

## 👨‍💻 Developers

Maiker was created by [@lusob](https://twitter.com/lusob) for educational and demonstration purposes. Feel free to reach out on Twitter if you have any questions or feedback!

---
