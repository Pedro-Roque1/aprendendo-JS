


const urlParams = new URLSearchParams(location.search);

var idPost = urlParams.get('id');
var xhr = new XMLHttpRequest();

xhr.open("GET", `http://jsonplaceholder.typicode.com/posts/${idPost}`);

xhr.addEventListener("load", function () {
    var resposta = xhr.responseText;
    var post = JSON.parse(resposta);

    var listagem = document.querySelectorAll(".list-group-item");
    listagem.forEach(function(lista,posicao) {
        if (posicao == 0) {
            var conteudoId = document.createElement("h6");
            conteudoId.textContent = post.id;
            lista.appendChild(conteudoId);
        } else if(posicao == 1) {
            var conteudoTitle = document.createElement("h6");
            conteudoTitle.textContent = post.title;
            lista.appendChild(conteudoTitle);
        } else if(posicao == 2) {
            var conteudoBody = document.createElement("h6");
            conteudoBody.textContent = post.body;
            lista.appendChild(conteudoBody);
        }
    });
});

xhr.send();

