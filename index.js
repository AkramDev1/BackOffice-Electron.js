//function reload
function reload() {
    fetch(URL_ARTICLES)
        .then(res => res.json())
        .then(data => {
            data.forEach(myElement => {
                output += `
            <tr class="tr-${myElement.id_article}">

                <td class="title"><div>${myElement.title}</div> <input type="text"  class="d-none" onchange="changeTitle(this.value,${myElement.id_article})" value="" /></td>

                <td class="description"><div>${myElement.description}</div> <textarea class="d-none" name="" id="" cols="20" rows="10" onchange="changeDescription(this.value,${myElement.id_article})">${myElement.description}</textarea></td>

                <td class="image">
                        <img src=${URL_IMAGES+'/'+myElement.image} class="image-${myElement.id_article}" alt="artile image ${myElement.id_article}" />
                        <img src=${URL_IMAGES+'/'+myElement.image} class="d-none imageUpdated-${myElement.id_article}" alt="artile image ${myElement.id_article}" />
                        <input type="file" class="d-none file-${myElement.id_article}" name="data" onchange="changeImage(event,${myElement.id_article})">
                </td>
                <td>${myElement.creat_at}</td>
                <td>

               
                <button type="button" class="btn btn-success btn-${myElement.id_article}" onClick="modify(${myElement.id_article})"> <i class="fas fa-pen"></i></button>

                <div class="d-none visible-${myElement.id_article} deleteVisible-${myElement.id_article}">
                    <button type="button" class="btn btn-primary" onClick="validate(${myElement.id_article})"><i class="fas fa-check"></i></button>      
                    <button onClick="cancel(${myElement.id_article})" type="button" class="btn btn-secondary"><i class="fas fa-times-circle"></i></button>     
                </div>

                 <button type="button" class="btn btn-danger delete-${myElement.id_article}" onClick="delete_article(${myElement.id_article})"> <i class="fas fa-trash-alt"></i> 
            </button>
         
                </td>   
        </tr>          
            `;
            });

            TBODY.innerHTML = output
        })
}

reload();