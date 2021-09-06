const URL = 'http://localhost:4001/';
const URL_ARTICLES = `${URL}article`;
const URL_SINGLE_ARTICLE = `${URL}single-article`;
const URL_IMAGES = `${URL}uploads`;
// const axios = require('axios')
var formData = new FormData();
const TBODY = document.querySelector('tbody');
let output = `
<tr class="d-none visible">
    <td>
        <input class="added_title" type="text" value="">
    </td>
    <td>
        <textarea class="added_description" name="" id="" cols="30" rows="10" value="">
        </textarea>
    </td>
    <td class="image">
        <img src="" class="added_image" alt="" />
        <input type="file" class="input_added_image" onchange="changeNewImage(event)">
    </td>
    <td>${Date()}</td>
    <td>
        <div>
            <button type="button" onClick="validateNewArticle()" class="btn btn-primary"><i class="fas fa-check"></i></button>      
            <button type="button"  onClick="cancelNewArticle()" class="btn btn-secondary"><i class="fas fa-times-circle"></i></button>     
        </div>
    </td>
</tr> `;