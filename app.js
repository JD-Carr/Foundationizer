const {app, BrowserWindow, Menu} = require('electron')
const url = require("url");
const path = require("path");
const fs = require("fs");

let menu;
let appWindow;


const menubarTop = [
  {
    label: 'File',
    submenu: [
      {
        label: 'New',
        click: () => {
          console.log("Pre-New File");
          appWindow.loadFile('src/worldbuilder.html');
          console.log("Post-New File");
        }
      },
      {
        label: 'Open',
        click: () => {
          console.log("Pre-New File");
          console.log("Post-New File");
        }
      },
      {
        label: 'Save',
        click: ()=> {
          console.log("Pre-Save File");
          console.log("Post-Save File");
        }
      }
    ]
  },
  {
    label: 'Toggle Developer Tools',
    accelerator: (function() {
      return 'Ctrl+Shift+I';
    })(),
    click: function(item, focusedWindow) {
      console.log("Pre-Toggle Developer Tools");
      if (focusedWindow)
      focusedWindow.toggleDevTools();
      console.log("Post-Toggle Developer Tools");
    }
  },
  {
    label: 'Quit',
    accelerator: 'CmdOrCtrl+W',
    role: 'Quit',
  }
];

function createWindow() {
  appWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    icon: 'assets/favicon.ico',
    backgroundColor: '#0000',
    webPreferences: {
      nodeIntegration: true
    }
  })
  appWindow.loadFile('index.html');

  menu = Menu.buildFromTemplate(menubarTop);
  Menu.setApplicationMenu(menu);

  appWindow.webContents.openDevTools();

  console.log('my path:',app.getAppPath());

  appWindow.on('closed', function () {
    appWindow = null;
  })
}//end createWindow

app.on('ready', createWindow);

app.on('resize', function(e,x,y){
  appWindow.setSize(x, y)
})

app.on('window-all-closed', function () {
  app.quit()
})

app.on('activate', function () {
  if (appWindow === null) {
    createWindow()
  }
})
