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
 2.  Install dependencies:
      ```bash
      npm  install
## Development

To run the app in development mode: `npm run start`
This will start the Electron app and load the development version of the web application.

## Building

To build the application: ```npm run build```
This command uses webpack to bundle and optimize the application.

## Packaging

To package the application for distribution:```npm run package```
This uses electron-builder to create distributable packages for your target platforms.

## Configuration

The `package.json` file contains important configuration for both the development environment and the build process. Key sections include:

-   `scripts`: Defines npm run commands for starting, building, and packaging the app.
-   `devDependencies`: Lists the development tools and libraries used.
-   `build`: Configures electron-builder for creating distributable packages.
