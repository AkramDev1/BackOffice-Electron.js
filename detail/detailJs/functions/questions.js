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
                <div class="responsesToQuestion-${element.id_quest}"><input class="inputResponsesToQuestion-${element.id_quest}" value="" type="text"/><button
                onClick="responsesToQuestion(${element.id_article}, ${element.id_user}, ${element.id_quest})" >Envoyer</button></div>`;
                reponses(element.id_user, element.id_quest);
            });
            document.querySelector(".sectionDetail").innerHTML = innerSection;
        })
}