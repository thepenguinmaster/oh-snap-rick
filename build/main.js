"use strict";
// main.js
// Modules to control application life and create native browser window
var _a = require('electron'), app = _a.app, BrowserWindow = _a.BrowserWindow;
var path = require('path');
function createWindow() {
    // Create the browser window.
    var mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });
    // and load the index.html of the app.
    //mainWindow.loadFile('index.html')
    mainWindow.loadFile(__dirname + "/renderer/index.html");
    // Open the DevTools.
    mainWindow.webContents.openDevTools();
}
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(function () {
    createWindow();
    app.on('activate', function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0)
            createWindow();
    });
});
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin')
        app.quit();
});
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxVQUFVO0FBRVYsdUVBQXVFO0FBQ2pFLElBQUEsS0FBeUIsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUExQyxHQUFHLFNBQUEsRUFBRSxhQUFhLG1CQUF3QixDQUFBO0FBQ2xELElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUU1QixTQUFTLFlBQVk7SUFDbkIsNkJBQTZCO0lBQzdCLElBQU0sVUFBVSxHQUFHLElBQUksYUFBYSxDQUFDO1FBQ25DLEtBQUssRUFBRSxHQUFHO1FBQ1YsTUFBTSxFQUFFLEdBQUc7UUFDWCxjQUFjLEVBQUU7WUFDZCxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDO1NBQzVDO0tBQ0YsQ0FBQyxDQUFBO0lBRUYsc0NBQXNDO0lBQ3RDLG1DQUFtQztJQUNuQyxVQUFVLENBQUMsUUFBUSxDQUFJLFNBQVMseUJBQXNCLENBQUMsQ0FBQztJQUN4RCxxQkFBcUI7SUFDckIsVUFBVSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQTtBQUN2QyxDQUFDO0FBRUQsd0RBQXdEO0FBQ3hELHlEQUF5RDtBQUN6RCxzREFBc0Q7QUFDdEQsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQztJQUNuQixZQUFZLEVBQUUsQ0FBQTtJQUVkLEdBQUcsQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFO1FBQ2pCLGlFQUFpRTtRQUNqRSw0REFBNEQ7UUFDNUQsSUFBSSxhQUFhLENBQUMsYUFBYSxFQUFFLENBQUMsTUFBTSxLQUFLLENBQUM7WUFBRSxZQUFZLEVBQUUsQ0FBQTtJQUNoRSxDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQyxDQUFBO0FBRUYsd0VBQXdFO0FBQ3hFLDBFQUEwRTtBQUMxRSwyQkFBMkI7QUFDM0IsR0FBRyxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRTtJQUMxQixJQUFJLE9BQU8sQ0FBQyxRQUFRLEtBQUssUUFBUTtRQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtBQUMvQyxDQUFDLENBQUMsQ0FBQTtBQUVGLDRFQUE0RTtBQUM1RSx1RUFBdUUifQ==