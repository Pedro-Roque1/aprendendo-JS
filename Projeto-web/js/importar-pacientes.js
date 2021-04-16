/////////////////////////////////////////////REQUISIÇÃO AJAX = FAZER REQUISIÇÃO COM JS DE MODO ASSÍNCRONO (SEM PARAR A ATV JS)////////////////////////////////////////////////////////////////

var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click",function() {
    console.log("importando ...")

    var xhr = new XMLHttpRequest();//objeto de requisição Http

    xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes"); // configurando a requisição -> abrir nova aba e colar o endereço do site

    xhr.addEventListener("load",function(){ // depois que a resposta estiver carregada, execute a função de mostra-la no meu console
        //console.log(xhr.responseText);//texto da resposta
        var erroAjax = document.querySelector("#erro-ajax");

        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            var resposta =xhr.responseText;
            var pacientes = JSON.parse(resposta);//tranformando json em objeto JS->array
            // console.log(pacientes);
            // console.log(typeof pacientes);
            pacientes.forEach(paciente => {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("invisivel");

        }
        
    });
    xhr.send();//enviar requisição


});

