//function validateNewArticle
function validateNewArticle() {
    console.log("validateNewArticle work");


    formData.append("added_title", document.querySelector(".visible .added_title").value);
    formData.append("added_description", document.querySelector(".visible .added_description").value);

    for (let a of formData) {
        console.log("formData", a)
    }
    // var title = document.querySelector(".added_title").value;
    // var description = document.querySelector(".added_description").value;


    fetch('http://localhost:4001/addNewArticle', {
            method: "POST",
            headers: {
                // 'Content-Type': 'application/json'
            },
            body: formData
                // body: JSON.stringify({
                //     title: document.querySelector(".visible .added_description").value,
                //     description: document.querySelector(".visible .added_description").value,
                //     image: document.querySelector(".visible .added_image").value
                // })
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