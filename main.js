const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
    const win = new BrowserWindow({
        width: 480,
        height: 250,
        frame: false,
        alwaysOnTop: true,
        transparent: true,
        resizable:false,
        hasShadow:false,
        webPreferences: {
            preload: path.join(__dirname, "renderer.js"),
        },
    });

    win.loadFile("index.html");
}

app.whenReady().then(createWindow);
