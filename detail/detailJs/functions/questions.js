function questions(_id) {
    fetch(`${URL_QUESTIONS +"/"+ _id}`, {
            method: 'GET',
            headers: {},

        })
        .then(res => res.json())
        .then(data => {
            let innerSection = "";
            data.forEach(element => {
                innerSection += `<div class="question-reponse-${element.id_quest}"><h3>${element.question}</h3></div>`;
                reponses();
            });
            document.querySelector(".sectionDetail").innerHTML = innerSection;
        })
}