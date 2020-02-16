const {app, BrowserWindow} = require('electron');

if (process.env.ENABLE_ELECTRON_RELOAD) {
  require('electron-reload')(__dirname);
}

let mainWindow;

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    },
    icon: 'icon.png'
  });

  mainWindow.loadFile('public/index.html');

  mainWindow.on('closed', function () {
    mainWindow = null
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
})

app.on('activate', function () {
  if (mainWindow === null) createWindow();
})