const { ipcRenderer } = require('electron')
let btnDetail;
window.onload = function() {
    btnDetail = document.getElementById("detail")
    btnDetail.onclick = function() {
        const obj = {}
        ipcRenderer.invoke("detail", obj)
    }
}