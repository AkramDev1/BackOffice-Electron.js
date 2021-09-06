const { ipcRenderer } = require('electron')
let btnlogin;
let username;
let password;
window.onload = function() {
    username = document.getElementById("username")
    password = document.getElementById("password")
    btnlogin = document.getElementById("login")
    btnlogin.onclick = function() {
        const obj = { username: username.value, password: password.value }
        ipcRenderer.invoke("login", obj)
    }
}