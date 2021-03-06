var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
    var conteudoFiltro = this.value;
    
    var pacientes = document.querySelectorAll(".paciente");

    if (conteudoFiltro.length > 0) {
  
        pacientes.forEach(function(paciente) {
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var tdAltura = paciente.querySelector(".info-altura");
            var altura = tdAltura.textContent;
            var expressao = RegExp(conteudoFiltro,"i")
                if (!expressao.test(nome)){
                    paciente.classList.add("invisivel"); 

                } else {
                    paciente.classList.remove("invisivel");
                }
        });
    } else {
        pacientes.forEach(function(paciente) {
            paciente.classList.remove("invisivel");
        });
    }
});
