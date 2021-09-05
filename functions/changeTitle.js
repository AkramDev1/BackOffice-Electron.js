//function changeTitle
function changeTitle(value, id) {
    const tr = document.querySelector(`.tr-${id}`);
    tr.querySelector(".title input").textContent = value;
}