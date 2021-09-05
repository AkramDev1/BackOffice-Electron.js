//function delete_article:
function delete_article(id) {
    fetch(`http://localhost:4001/delete_article/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(() => {
            output = ""
            TBODY.innerHTML = "";
            reload();
        })
}