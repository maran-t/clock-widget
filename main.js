const { app, BrowserWindow } = require("electron");

let mainWindow;

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 200,
    height: 100,
    alwaysOnTop: true,
    frame: false, // Remove window frame
    transparent: true, // Transparent background
    resizable: false,
    skipTaskbar: true, // Hide from taskbar
    webPreferences: {
      nodeIntegration: true,
    }
  });

  mainWindow.loadFile("index.html");
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
