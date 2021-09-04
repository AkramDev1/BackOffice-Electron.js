//function reload
function reload() {
    fetch(URL_ARTICLES)
        .then(res => res.json())
        .then(data => {
            data.forEach(myElement => {
                output += `
            <tr class="tr-${myElement.id_article}">
                <td class="title"><div>${myElement.title}</div> <input type="text" value=${myElement.title} class="d-none" onchange="changeTitle(this.value,${myElement.id_article})" /></td>
                <td class="description"><div>${myElement.description}</div> <textarea class="d-none" name="" id="" cols="20" rows="10" onchange="changeDescription(this.value,${myElement.id_article})">${myElement.description}</textarea></td>
                <td class="image">
                        <img src=${URL_IMAGES+'/'+myElement.image} class="image-${myElement.id_article}" alt="artile image ${myElement.id_article}" />
                        <input type="file" class="d-none file-${myElement.id_article}" name="data" onchange="changeImage(event,${myElement.id_article})">
                </td>
                <td>${myElement.creat_at}</td>
                <td>

               
                <button type="button" class="btn btn-success btn-${myElement.id_article}" onClick="modify(${myElement.id_article})"> <i class="fas fa-pen"></i></button>

                <div class="d-none visible-${myElement.id_article} deleteVisible-${myElement.id_article}">
                    <button type="button" class="btn btn-primary" onClick="validate(${myElement.id_article})"><i class="fas fa-check"></i></button>      
                    <button onClick="deleteVisible(${myElement.id_article})" type="button" class="btn btn-secondary"><i class="fas fa-times-circle"></i></button>     
                </div>

                 <button type="button" class="btn btn-danger" onClick="delete_article(${myElement.id_article})"> <i class="fas fa-trash-alt"></i> 
            </button>
         
                </td>   
        </tr>          
            `;
            });

            TBODY.innerHTML = output
        })
}

//function add:
function add() {
    document.querySelector(".visible").classList.toggle("d-none")
}

function deleteVisible(id) {
    document.querySelector(`.deleteVisible-${id}`).classList.toggle("d-none")
    document.querySelector(`.btn-${id}`).classList.toggle("d-none")
}



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

//function modify
function modify(id) {
    const tr = document.querySelector(`.tr-${id}`)
    tr.querySelector(".title").firstChild.classList.add("d-none");
    tr.querySelector(".title input").classList.remove("d-none")

    tr.querySelector(".description").firstChild.classList.add("d-none");
    tr.querySelector(".description textarea").classList.remove("d-none")

    tr.querySelector(".image input").classList.remove("d-none")

    console.log("tr", tr);
    document.querySelector(`.btn-${id}`).classList.toggle("d-none")
    document.querySelector(`.visible-${id}`).classList.toggle("d-none")
}

//function validate
function validate(id) {
    const tr = document.querySelector(`.tr-${id}`)
    const myDataObject = {
        "id": id,
        "title": tr.querySelector(".title input").textContent,
        "description": tr.querySelector(".description textarea").textContent,
        // "image": formData
    };
    console.log("formData =", formData);
    for (let a of formData) {
        console.log("a", a)
    }
    formData.append("id", id);
    formData.append("title", tr.querySelector(".title input").textContent);
    formData.append("description", tr.querySelector(".description textarea").textContent);

    fetch(`http://localhost:4001/update_article`, {
        method: 'PUT',
        headers: {
            // "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundaryIn312MOjBWdkffIM"
            // "Content-Type": "multipart/form-data",
            // "Content-Type": "application/json",
            // withCredentials: true
        },
        // body: JSON.stringify({
        //     id: id,
        //     title: tr.querySelector(".title input").textContent,
        //     description: tr.querySelector(".description textarea").textContent,
        //     image: formData
        // }),
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

//function changeTitle
function changeTitle(value, id) {
    const tr = document.querySelector(`.tr-${id}`);
    tr.querySelector(".title input").textContent = value;
}

//function changeDescription
function changeDescription(value, id) {
    const tr = document.querySelector(`.tr-${id}`);
    tr.querySelector(".description textarea").textContent = value;
}

//function changeImage
function changeImage(event, id) {
    const tr = document.querySelector(`.tr-${id}`)
    formData.append("file", event.target.files[0]);
    console.log("formData", formData);
    console.log(event.target.files[0]);
    // tr.querySelector(".image input").textContent = event;
    document.querySelector(`.image-${id}`).setAttribute("src", event.target.files[0].path)
}