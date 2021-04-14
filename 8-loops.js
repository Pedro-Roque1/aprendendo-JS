console.log(`\n Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
); // criando um array

const idadeComprador = 21;
const maiorIdade = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("\n Destinos possíveis:");
console.log(listaDeDestinos);



const podeComprar = idadeComprador >= maiorIdade || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while(contador < 3){
    
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;   
        break;
        
    }
    contador ++;
}
console.log("Destino existe: ", destinoExiste);
if(podeComprar && destinoExiste){
    console.log("Boa Viajem!");
}else{
    console.log("Desculpe tivemos um erro");
}

for(let cont = 0; cont < 3; cont ++){
    
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        console.log("destino encontrado");  
        
    }
    
}
