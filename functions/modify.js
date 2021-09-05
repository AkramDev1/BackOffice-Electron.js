//function modify
function modify(id) {
    const tr = document.querySelector(`.tr-${id}`)
    tr.querySelector(".title").firstChild.classList.toggle("d-none");
    tr.querySelector(".title input").classList.toggle("d-none")
    tr.querySelector(".description").firstChild.classList.toggle("d-none");
    tr.querySelector(".description textarea").classList.toggle("d-none")
    tr.querySelector(".image input").classList.toggle("d-none");
    tr.querySelector(`.image .image-${id}`).classList.toggle("d-none");
    tr.querySelector(`.image .imageUpdated-${id}`).classList.toggle("d-none");
    document.querySelector(`.btn-${id}`).classList.toggle("d-none")
    document.querySelector(`.visible-${id}`).classList.toggle("d-none")
    document.querySelector(`.delete-${id}`).classList.toggle("d-none");
    //
    fetch(`${URL_SINGLE_ARTICLE +"/"+ id}`, {
            method: 'GET',
            headers: {},

        })
        .then(res => res.json())
        .then(data => {
            // tr.querySelector(`.imageUpdated-${id}`).setAttribute("src", `${URL_IMAGES+'/'+data.image}`)
            console.log('data.title', data.title);
            tr.querySelector(".title input").value = data.title;
        })
        //
}