console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
); // criando um array

const idadeComprador = 21;
const maiorIdade = 18;
const estaAcompanhada = false;
const temPassagemComprada = true;
console.log("Destinos possíveis:");
console.log(listaDeDestinos);


        // if(idadeComprador >= maiorIdade){//>,<,<=,>=,==
        //     listaDeDestinos.splice(1,1);
        //     console.log(`A passagem foi vendida`);
        // }else{
        //     if(estaAcompanhada){
        //         console.log("O comprador está acompanhado")
        //         listaDeDestinos.splice(1,1);
        //         console.log(`A passagem foi vendida`);
        //     }else{
        //         console.log(`Não podemos vender esta passagem porque o comprador é menor de idade`);
        //     }

        // }
        // console.log(listaDeDestinos);
        // console.log(idadeComprador<18);
        // console.log(idadeComprador>18);
        // console.log(idadeComprador<=18);
        // console.log(idadeComprador>=18);
        // console.log(idadeComprador==18);



if (idadeComprador >= maiorIdade || estaAcompanhada) {//>,<,<=,>=,==, &&, ||
    console.log(`A passagem para ${listaDeDestinos[1]} pode ser vendida. `);
    listaDeDestinos.splice(1, 1);
    console.log(`Passagem comprada!`);
} else {
    console.log(`Não podemos vender esta passagem porque o comprador é menor de idade`);
}
console.log("Embaque: \n \n");

if (idadeComprador >=18 && temPassagemComprada){
    console.log("Boa viagem!");
}else{
    console.log("Não Pode embarcar");
}

