# Maxim Desktop

Maxim Desktop is an Electron-based desktop application that wraps our web-based TODO app, providing additional native functionality.

## Features

- **Electron Shell**: Loads the hosted web application in a desktop environment.
- **Preload Scripts**: Injects native functionality into the web app.
- **File System Access**: Uses Electron's file system API for persistent storage, unlike the web version which uses localStorage.
- **Native Notifications**: Utilizes Electron's native notification system, providing a more integrated experience compared to browser notifications.
- **Custom Dialogs**: Implements Electron's dialog system for a native look and feel, differing from the web version's browser-based dialogs.

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/harshit151001/todo-desktop
   cd maxim-desktop
Install dependencies:
bash

npm install
Development
To run the app in development mode:

bash

npm run start
This will start the Electron app and load the development version of the web application.

Building
To build the application:

bash

npm run build
This command uses webpack to bundle and optimize the application.

Packaging
To package the application for distribution:

bash

npm run package
This uses electron-builder to create distributable packages for your target platforms.

Configuration
The package.json file contains important configuration for both the development environment and the build process:

json

{
  "name": "maxim-desktop",
  "version": "1.0.0",
  "main": "dist/main.js",
  "scripts": {
    "start": "electron .",
    "build": "webpack --config webpack.config.js",
    "package": "electron-builder"
  },
  "devDependencies": {
    "electron": "^31.3.0",
    "electron-builder": "^24.13.3",
    "terser-webpack-plugin": "^5.3.10",
    "ts-loader": "^9.5.1",
    "typescript": "^5.5.4",
    "webpack": "^5.93.0",
    "webpack-cli": "^5.1.4"
  },
  "build": {
    "appId": "com.example.maxim-desktop",
    "productName": "Maxim Desktop",
    "files": [
      "dist/**/*",
      "node_modules/**/*",
      "package.json"
    ],
    "directories": {
      "buildResources": "assets"
    },
    "asar": true,
    "compression": "maximum"
  }
}
Project Structure
src/: Source files for the Electron app
main.ts: Main process file
preload.ts: Preload script for injecting native functionality
dist/: Compiled JavaScript files
assets/: Application icons and other resources
webpack.config.js: Webpack configuration for building the app
