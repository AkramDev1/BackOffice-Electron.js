function reponses(_id) {
    fetch(`${URL_QUESTIONS +"/"+ _id}`, {
            method: 'GET',
            headers: {},

        })
        .then(res => res.json())

}