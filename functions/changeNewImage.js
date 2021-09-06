//function changeNewImage
function changeNewImage(event) {
    formData.delete("added_file");
    formData.append("added_file", event.target.files[0]);
    console.log("formData", formData);
    console.log(event.target.files[0]);
    document.querySelector(".added_image").setAttribute("src", event.target.files[0].path)
}