function questions(_id) {
    fetch(`${URL_QUESTIONS +"/"+ _id}`, {
            method: 'GET',
            headers: {},

        })
        .then(res => res.json())
        .then(data => {
            let innerSection = "";
            data.forEach(element => {
                console.log(element);
                innerSection += `<div class="alert alert-secondary question-reponse-${element.id_quest} mt-3" role="alert">${element.question}</div>
                <div class="reponses-${element.id_quest}"></div>
                    <div class="input-group responsesToQuestion-${element.id_quest} mb-3">
                        <input type="text" class="form-control inputResponsesToQuestion-${element.id_quest}" value="" aria-describedby="button-addon2">
                        <button class="btn btn-outline-secondary" onClick="responsesToQuestion(${element.id_article}, ${element.id_user}, ${element.id_quest})" type="button" id="button-addon2">REPONDRE</button>
                </div>`;
                reponses(element.id_user, element.id_quest);
            });
            document.querySelector(".sectionDetail").innerHTML = innerSection;
        })
}