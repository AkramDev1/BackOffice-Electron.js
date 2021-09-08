//function validateNewArticle
function validateNewArticle() {
    formData.append("added_title", document.querySelector(".visible .added_title").value);
    formData.append("added_description", document.querySelector(".visible .added_description").value);
    fetch('http://localhost:4001/addNewArticle', {
            method: "POST",
            headers: {},
            body: formData
        })
        .then((res) => {
            return res.json()
        }).then(data => {
            reload();
            document.querySelector("#add").classList.toggle("d-none");
            formData.delete("added_title");
            formData.delete("added_description");
            formData.delete("added_file");
        }).catch(e => {
            console.log(e)
        })
}