## Dependências

  - npm install --save cross-env
  - npm install electron-is-dev
  - npm install concurrently --save
  - npm install electron 
  - npm install electron-builder
  - npm install wait-on

## Alteração

```
  "scripts": {
    "react-start": "react-scripts start",
    "react-build": "react-scripts build",
    "react-test": "react-scripts test --env=jsdom",
    "react-eject": "react-scripts eject",
    "electron-build": "electron-builder",
    "release": "yarn react-build && electron-builder --publish=always",
    "build": "yarn react-build && yarn electron-build",
    "start": "concurrently \"cross-env BROWSER=none yarn react-start\" \"wait-on http://localhost:3000 && electron .\""
  },
```

## Adicione

```
  package.json:{
    "main": "public/main.js"
  }

  projeto/public:{
    const { app, BrowserWindow } = require('electron')
    const path = require("path");
    const isDev = require("electron-is-dev");

    function createWindow () {
      const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
          nodeIntegration: true
        }
      })

      win.loadURL( isDev ? "http://localhost:3000": `file://${path.json(__dirname, '../build/index.html')}`)

      win.on("closed", () => (win = null));
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
  }
```