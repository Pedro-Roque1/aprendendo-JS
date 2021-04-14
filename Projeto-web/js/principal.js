//console.log("fui carregado de um arquivo externo");
var titulo = document.querySelector(".titulo");
			//console.log(titulo);
			//console.log(titulo.textContent);
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = document.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var pesoValido =  peso < 1000 && peso > 0;
var alturaValida = altura < 2.10 && altura > 0;

if (pesoValido == true && alturaValida == true){
    var tdImc = paciente.querySelector(".info-imc");
    var imc = peso/Math.pow(altura,2);
    tdImc.textContent = imc;
}else{
    var tdImc = paciente.querySelector(".info-imc");
    tdImc.textContent = "Peso ou altura inválidos";
}


