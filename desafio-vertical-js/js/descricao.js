
const urlParams = new URLSearchParams(location.search);

var idPost = urlParams.get('id');
var xhr = new XMLHttpRequest();

xhr.open("GET", `http://jsonplaceholder.typicode.com/posts/${idPost}`);

xhr.addEventListener("load", function () {
    var resposta = xhr.responseText;
    var post = JSON.parse(resposta);
    document.querySelector(".id").textContent = post.id;
    document.querySelector(".titulo").textContent = post.title;
    document.querySelector(".desc").textContent = post.body;
});

xhr.send();

