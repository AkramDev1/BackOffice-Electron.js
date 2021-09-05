//function changeImage
function changeImage(event, id) {
    formData.delete("file");
    const tr = document.querySelector(`.tr-${id}`)
    formData.append("file", event.target.files[0]);
    console.log("formData", formData);
    console.log(event.target.files[0]);
    // tr.querySelector(".image input").textContent = event;
    document.querySelector(`.imageUpdated-${id}`).setAttribute("src", event.target.files[0].path)
}