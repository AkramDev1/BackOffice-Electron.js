function detailArticle(_id) {
    fetch(`${URL_SINGLE_ARTICLE +"/"+ _id}`, {
            method: 'GET',
            headers: {},

        })
        .then(res => res.json())
        .then(data => {
            let innerHeader = `<h1>${data.title}</h1><p>${data.description}</p><img src=${URL_IMAGES +"/"+ data.image} alt=""/>`;
            document.querySelector(".headerDetail").innerHTML = innerHeader;
        })
}