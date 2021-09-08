//function validate
function validate(id) {
    const tr = document.querySelector(`.tr-${id}`)
    formData.delete("id");
    formData.delete("title");
    formData.delete("description");
    formData.delete("modify");
    formData.append("id", id);
    formData.append("title", tr.querySelector(".title input").value);
    formData.append("description", tr.querySelector(".description textarea").textContent);
    formData.append("modify", Date.now());
    fetch(`http://localhost:4001/update_article`, {
            method: 'PUT',
            headers: {},
            body: formData
        })
        .then(() => {
            output = ""
            TBODY.innerHTML = "";
            reload();
        }).catch(e => {
            console.log(e)
        })
}
module.exports = validate