const electron = require('electron');
const { app, BrowserWindow } = require('electron');
const { setupTitlebar, attachTitlebarToWindow } = require('custom-electron-titlebar/main');

setupTitlebar();

function createWindow () 
{
    const window = new BrowserWindow 
    ({
        width: 1280,
        height: 720,
        webPreferences: {
            nodeIntegration: true,
            preload: `${__dirname}/preload.js`
        }
    })
    attachTitlebarToWindow(window);
    window.loadFile('src/index.html');
}



app.whenReady().then(createWindow)

app.on('window-all-closed', () => 
{
    if (process.platform !== 'darwin') 
    {
        app.quit();
    }
})

app.on('activate', () => 
{
    if (BroweserWindow.getAllWindows().length === 0) 
    {
        createWindow();
    }
})