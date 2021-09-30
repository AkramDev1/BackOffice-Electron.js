const { app, BrowserWindow, ipcMain, Notification, Menu } = require('electron');
const path = require('path');
let db = require('./database');
const bcrypt = require("bcrypt");
let win, articleWin;
let winlogin;

function createWindow(results) {
    win = new BrowserWindow({
            width: 800,
            height: 600,
        })
        // win.loadFile("index.html")
    win.loadURL(`file://${__dirname}/index.html?id=${results[0].id_user}`);
    // Quit app when closed
    win.on('closed', function() {
        app.quit();
    });
    // Build menu from template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    // Insert menu
    Menu.setApplicationMenu(mainMenu);
}

function createWindowArticle() {
    articleWin = new BrowserWindow({
        height: 600,
        width: 900,
        webPreferences: {
            webSecurity: false
        }
    });
    articleWin.loadFile('detail/detail.html')

    // Handle garbage collection
    articleWin.on('close', function() {
        articleWin = null;
    });
}
// Create menu template
const mainMenuTemplate = [
    // Each object is a dropdown
    {
        label: 'Quit',
        accelerator: process.platform == 'darwin' ? 'Command+q' : 'Ctrl+q',
        click() {
            app.quit();
        }
    },
];

// If OSX, add empty object to menu
if (process.platform == 'darwin') {
    mainMenuTemplate.unshift({});
}
// Add developer tools option if in dev
if (process.env.NODE_ENV !== 'production') {
    mainMenuTemplate.push({
        label: 'Developer Tools',
        submenu: [{
                role: 'reload'
            },
            {
                label: 'Toggle DevTools',
                accelerator: process.platform == 'darwin' ? 'Command+I' : 'Ctrl+I',
                click(item, focusedWindow) {
                    focusedWindow.toggleDevTools();
                }
            }
        ]
    });
}

function loginWindow() {
    winlogin = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'login/js/login.js')
        }
    })
    winlogin.loadFile('login/login.html')
}
app.whenReady().then(loginWindow)
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

ipcMain.handle('login', (event, obj) => {
    validatelogin(obj)
});

function validatelogin(obj) {
    const { username, password } = obj
    const sql = "SELECT * FROM admins WHERE username=? AND password=?"
    db.query(sql, [username, password], (error, results, fields) => {
        if (error) { console.log(error); }
        if (results.length > 0) {
            bcrypt.compare(password, results[0].password, (error, response) => {
                if (results) {
                    createWindow(results)
                    win.show()
                    winlogin.close()
                } else {
                    new Notification({
                        title: "login",
                        body: 'username or password wrong!!!'
                    }).show()
                }
            })
        } else {
            new Notification({
                title: "login",
                body: "user don't exist??"
            }).show()
        }
    })
}