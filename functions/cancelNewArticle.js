//function cancelNewArticle
function cancelNewArticle() {
    document.querySelector(".visible").classList.toggle("d-none");
    document.querySelector("#add").classList.toggle("d-none")
    formData.delete("added_title");
    formData.delete("added_description");
    formData.delete("added_file");
    document.querySelector(".added_title").value = ""
    document.querySelector(".added_description").value = "";
    document.querySelector(".added_image").setAttribute("src", "");
    document.querySelector(".input_added_image").value = "";
}