//function changeDescription
function changeDescription(value, id) {
    const tr = document.querySelector(`.tr-${id}`);
    tr.querySelector(".description textarea").textContent = value;
}