const electron = require('electron');
const { app, BrowserWindow } = electron;
const path = require('path');
const isDev = require('electron-is-dev');


let mainWindow = null;
app.on('ready', createWindow);
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});
app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
});
function createWindow() {
  var jarPath = app.getAppPath() + '/public/poc-0.0.1-SNAPSHOT.jar';
var child = require('child_process').spawn(
    'java', ['-jar', jarPath, '']
  );
console.log(jarPath);
console.log("Process Id" + child.pid)
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 1024,
    title: "InventGrid POC app"
  });
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  mainWindow.on('closed', function () {
    process.kill(child.pid);
    mainWindow = null
  })
  mainWindow.on('page-title-updated', function (e) {
    e.preventDefault()
  });
}