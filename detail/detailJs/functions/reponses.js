function reponses(id_user, id_quest) {
    fetch(`${URL_RESPONSES +"/"+ id_user +"/"+ id_quest}`, {
            method: 'GET',
            headers: {},

        })
        .then(res => res.json())
        .then(data => {
            // console.log("data", data);
            let innerQuestion = "";
            data.forEach(element => {
                innerQuestion += `
                <div class="alert alert-success ml-5" role="alert">
                ${element.reponse}
                </div>`;
            });
            document.querySelector(`.reponses-${id_quest}`).innerHTML = innerQuestion;
        })

}