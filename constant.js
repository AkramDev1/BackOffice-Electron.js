const URL = 'http://localhost:4001/';
const URL_ARTICLES = `${URL}article`;
const URL_SINGLE_ARTICLE = `${URL}single-article`;
const URL_IMAGES = `${URL}uploads`;
// const axios = require('axios')
var formData = new FormData();
const TBODY = document.querySelector('tbody');
let output = `<tr class="d-none visible">
<td><input type="text"></td>
<td><textarea name="" id="" cols="30" rows="10"></textarea></td>
<td><input type="file"></td>
<td>${Date.now().getYear}</td>
<td>
<div>
<button type="button" class="btn btn-primary"><i class="fas fa-check"></i></button>      
<button type="button" class="btn btn-secondary"><i class="fas fa-times-circle"></i></button>     
</div>
</td>
</tr> `;