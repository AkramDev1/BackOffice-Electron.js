//function reload    
function reload() {
    fetch(URL_ARTICLES)
        .then(res => res.json())
        .then(data => {
            data.forEach(myElement => {
                let months_creat_at = new Date(myElement.creat_at).getMonth() + 1;
                let months_modify_at = new Date(myElement.modify_at).getMonth() + 1;
                output += `
            <tr class="tr-${myElement.id_article}">
                <td class="title"><a onClick="test(${myElement.id_article})" href="detail/detail.html" target="_blank" id="detail">${myElement.title}</a><input type="text"  class="d-none" onchange="changeTitle(this.value,${myElement.id_article})" value="" /></td>
                <td class="description"><div>${myElement.description}</div> <textarea class="d-none" name="" id="" cols="20" rows="10" onchange="changeDescription(this.value,${myElement.id_article})">${myElement.description}</textarea></td>
                <td class="image">
                        <img src=${URL_IMAGES+'/'+myElement.image} class="image-${myElement.id_article}" alt="artile image ${myElement.id_article}" />
                        <img src=${URL_IMAGES+'/'+myElement.image} class="d-none imageUpdated-${myElement.id_article}" alt="artile image ${myElement.id_article}" />
                        <input type="file" class="d-none file-${myElement.id_article}" name="data" onchange="changeImage(event,${myElement.id_article})">
                </td>
                <td>${new Date(myElement.creat_at).getFullYear()+'-' + 
                months_creat_at + '-'+new Date(myElement.creat_at).getDate() + ' '+ new Date(myElement.creat_at).getHours()+ ':'+ new Date(myElement.creat_at).getMinutes() + ':'+ new Date(myElement.creat_at).getSeconds()}</td>
                <td>${new Date(myElement.modify_at).getFullYear()+'-' + 
                months_modify_at + '-'+new Date(myElement.modify_at).getDate() + ' '+ new Date(myElement.modify_at).getHours()+ ':'+ new Date(myElement.modify_at).getMinutes() + ':'+ new Date(myElement.modify_at).getSeconds()}</td>
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
            TBODY.innerHTML = output;
        })
}
reload();

function test(_id) {
    localStorage.setItem('id_article', _id)
}