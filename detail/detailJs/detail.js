window.onload = function() {
    const id = localStorage.getItem("id_article")
    detailArticle(id);
    questions(id);
}