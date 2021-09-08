//function changeImage
function changeImage(event, id) {
    formData.delete("file");
    formData.append("file", event.target.files[0]);
    document.querySelector(`.imageUpdated-${id}`).setAttribute("src", event.target.files[0].path)
}