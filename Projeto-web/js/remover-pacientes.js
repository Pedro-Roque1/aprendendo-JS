

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){
        event.target.parentNode.remove();
    },500);
    
    // var alvoEvento = event.target;
    // var paiDoAlvo = alvoEvento.parentNode; //TR paciente = remover
    // paiDoAlvo.classList.add("fadeOut");
});



// pacientes.forEach(function(paciente){
//     paciente.addEventListener("dblclick",function(){
//         this.remove();//this sempre atrelado ao dono do evento no caso paciente
//     });
// });