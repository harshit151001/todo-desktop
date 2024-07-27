import { app, BrowserWindow, dialog, ipcMain, Notification } from "electron";
import * as path from "path";
import * as fs from "fs";

let mainWindow: BrowserWindow | null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
    },
  });

  const startUrl = !app.isPackaged
    ? "http://localhost:5173"
    : "https://harshit151001.github.io/todo-app/";

  mainWindow.loadURL(startUrl);

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.handle("save-offline-data", (_, data) => {
  const filePath = path.join(app.getPath("userData"), "todos.json");
  return fs.promises.writeFile(filePath, JSON.stringify(data));
});

ipcMain.handle("get-offline-data", async () => {
  const filePath = path.join(app.getPath("userData"), "todos.json");
  try {
    const data = await fs.promises.readFile(filePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    return null;
  }
});

ipcMain.handle("show-notification", (_, title, body) => {
  new Notification({ title, body }).show();
});

ipcMain.handle("show-confirm-dialog", async (_, message) => {
  console.log("show-confirm-dialog");
  const { response } = await dialog.showMessageBox({
    type: "question",
    buttons: ["Yes", "No"],
    title: "Confirm",
    message: message,
  });
  return response === 0;
});
