const { app, BrowserWindow } = require('electron')
const path = require("path");
const isDev = require("electron-is-dev");

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth:500,
    minHeight: 400,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadURL( isDev ? "http://localhost:3000": `file://${path.json(__dirname, '../build/index.html')}`)

  // win.on("closed", () => (win = null));
  // win.setMenu(null)
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})