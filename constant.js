const URL = 'http://localhost:4001/';
const URL_ARTICLES = `${URL}article`;
const URL_IMAGES = `${URL}uploads`;
var formData = new FormData();
const TBODY = document.querySelector('tbody');
let output = `<tr class="d-none visible">
<td><input type="text"></td>
<td><textarea name="" id="" cols="30" rows="10"></textarea></td>
<td><input type="file"></td>
<td><input type="date" disabled></td>
<td>Actions</td>
</tr> `;