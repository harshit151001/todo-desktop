import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
  saveOfflineData: (data: any) => ipcRenderer.invoke("save-offline-data", data),
  getOfflineData: () => ipcRenderer.invoke("get-offline-data"),
  showNotification: (title: string, body: string) =>
    ipcRenderer.invoke("show-notification", title, body),
  showConfirmDialog: (message: string) =>
    ipcRenderer.invoke("show-confirm-dialog", message),
});
