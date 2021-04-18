
var xhr = new XMLHttpRequest();

xhr.open("GET","http://jsonplaceholder.typicode.com/posts?_limit=10");

xhr.addEventListener("load",function(){
    var resposta = xhr.responseText;
    var posts = JSON.parse(resposta);
    
    
    posts.forEach(function(post) {
        var list = document.querySelector(".list-group");
         
        var link = document.createElement("a");
        link.classList.add("list-group-item");
        link.href = `descricao.html?id=${post.id}`;
        link.appendChild(montaTitulo(post.title,"md-1"));
        link.appendChild(montaParagrafo(post.title));
       
        list.appendChild(link);
           
    });
});


xhr.send();


function montaTitulo(titulo,classe){
    var h5 = document.createElement("h5");
    h5.textContent = titulo;
    h5.classList.add(classe);
    return h5;
}
function montaParagrafo(descricao){
    var paragrafo = document.createElement("p");
    paragrafo.textContent = descricao;
    paragrafo.classList.add("md-1");
    return paragrafo;
}
