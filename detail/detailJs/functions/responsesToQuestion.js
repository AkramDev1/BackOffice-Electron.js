//function responsesToQuestion:
function responsesToQuestion(id_article, id_user, id_quest) {

    console.log("message");
    fetch(`${URL_RESPONSESQUESTION}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id_article: id_article,
            id_quest: id_quest,
            id_user: id_user,
            reponse: document.querySelector(`.inputResponsesToQuestion-${id_quest}`).value
        })
    }).then((res) => {
        return res.json()
    }).then(data => {
        console.log("data", data);
        document.querySelector(`.inputResponsesToQuestion-${id_quest}`).value = "";
        document.querySelector(`.reponses-${id_quest}`).innerHTML = "";
        //reload response:
        reponses(id_user, id_quest);
    }).catch(e => {
        console.log(e);
    })
}