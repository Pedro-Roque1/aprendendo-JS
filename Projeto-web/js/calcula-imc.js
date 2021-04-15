//console.log("fui carregado de um arquivo externo");
var titulo = document.querySelector(".titulo");
			//console.log(titulo);
			//console.log(titulo.textContent);
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(function(paciente) {
    
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var pesoValido =  peso < 500 && peso > 0;
    var alturaValida = altura < 2.10 && altura > 0;

    if (pesoValido && alturaValida) {
        var tdImc = paciente.querySelector(".info-imc");
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    } else {
        var tdImc = paciente.querySelector(".info-imc");
        paciente.classList.add("paciente-invalido");
        tdImc.textContent = "Peso ou altura inválidos";
    }


});

function calculaImc(peso,altura){
    var imc = 0;
    imc = peso/Math.pow(altura,2);
    return imc.toFixed(2);;
}