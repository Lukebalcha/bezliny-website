const { app, BrowserWindow, shell } = require("electron");
const path = require("path");
const http = require("http");

let mainWindow;
const PORT = process.env.CRM_PORT || 3000;

function waitForServer(timeout = 10000) {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    const check = () => {
      const req = http.get(`http://localhost:${PORT}/dashboard`, (res) => {
        resolve();
      });
      req.on("error", () => {
        if (Date.now() - start > timeout) reject(new Error("Server not running. Start it first with: npm run dev"));
        else setTimeout(check, 500);
      });
      req.setTimeout(2000, () => { req.destroy(); setTimeout(check, 500); });
    };
    check();
  });
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 1000,
    minHeight: 700,
    title: "Bezliny CRM",
    backgroundColor: "#09090b",
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
    icon: path.join(__dirname, "public", "icon-192.svg"),
  });

  mainWindow.loadURL(`http://localhost:${PORT}/dashboard`);

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: "deny" };
  });

  mainWindow.on("closed", () => { mainWindow = null; });
}

app.whenReady().then(async () => {
  try {
    await waitForServer();
  } catch (e) {
    console.error(e.message);
    app.quit();
    return;
  }
  createWindow();
});

app.on("window-all-closed", () => {
  app.quit();
});
