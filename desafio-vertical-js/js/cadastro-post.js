var botaoAdiciona = document.querySelector("#adicionar-post");
botaoAdiciona.addEventListener("click", function (event) {
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    var post = {
        userId: form.idUser.value,
        title: form.title.value,
        body: form.body.value
    }

    dado = JSON.stringify(post);

    var xhr = new XMLHttpRequest();

    xhr.open("POST", `http://jsonplaceholder.typicode.com/posts`);


    xhr.addEventListener("load", function () {
        var resposta = xhr.responseText;
        console.log(resposta);
        var alert = document.querySelector(".alert")
        alert.classList.remove("escondido");
        alert.textContent = "Seus dados foram enviados com sucesso, porém não cadastrados por limitações da API!";

    });
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(dado);




});

