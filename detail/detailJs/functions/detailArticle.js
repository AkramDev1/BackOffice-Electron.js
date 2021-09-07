function detailArticle(_id) {
    fetch(`${URL_SINGLE_ARTICLE +"/"+ _id}`, {
            method: 'GET',
            headers: {},

        })
        .then(res => res.json())
        .then(data => {
            let innerHeader = `
            <div class="card" style="width: 18rem;">
                <img src="${URL_IMAGES +"/"+ data.image} " class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${data.title}</h5>
                    <p class="card-text">${data.description}.</p>
                </div>
            </div>`;
            document.querySelector(".headerDetail").innerHTML = innerHeader;
        })
}