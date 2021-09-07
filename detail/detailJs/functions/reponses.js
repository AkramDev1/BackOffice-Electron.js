function reponses(id_user, id_quest) {
    fetch(`${URL_RESPONSES +"/"+ id_user +"/"+ id_quest}`, {
            method: 'GET',
            headers: {},

        })
        .then(res => res.json())
        .then(data => {
            console.log("data", data);
            let innerQuestion = "";
            data.forEach(element => {
                innerQuestion += `<h6> ${element.reponse}</h6>`;
            });
            document.querySelector(`.reponses-${id_quest}`).innerHTML = innerQuestion;
        })

}