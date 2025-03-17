function saudacao(nome) {
    console.log("olá " + nome)
};
saudacao("Raquel");


function add (x,y) {
    return x + y;
}

console.log(add(3, 5));


function multiply (x,y){
    return x * y;
}

console.log(multiply(4,3))

function ehPar (numero) {
    return numero % 2 === 0;
}

console.log(ehPar(10));
console.log(ehPar(15));

function dobro(numero){
    return numero * 2 ;
}

console.log(dobro(4));

function media (x,y,z) {
    return x + y + z 
}

console.log(media(3, 7, 9)/3);

function celsiusParaFahrenheit (C) {
    return F = (C * 9/5) + 32
}

console.log(celsiusParaFahrenheit(27));

function contarCaracteres (string){
    return string.length 
}

console.log(contarCaracteres("JavaScript"));

function inverterString (texto) {
    return texto.split("").reverse().join("");
}

console.log(inverterString("Raquel"));
console.log(inverterString("JavaScript"));

function contarVogais(palavra) {
    let vogais = "aeiouAEIOU"; // Lista de vogais
    let contador = 0;

    for (let letra of palavra) {
        if (vogais.includes(letra)) {
            contador++;
        }
    }
    
    return contador;
}

console.log(contarVogais("JavaScript")); // Deve retornar 3
console.log(contarVogais("Raquel")); // Deve retornar 3
console.log(contarVogais("BCDFG")); // Deve retornar 0

/*
function interrogatorio() {
    const numSim = 0;
    const p1 = prompt("Telefonou para vitima?");
    const p2 = prompt("Esteve no local do Crime?");
    const p3 = prompt("Mora perto da vítima?");
    const p4 = prompt("Devia para vítima?");
    const p5 = prompt("Já trabalhou com a vítima?");
    if (p1 === "sim") {
        numSim += 1;
    }
    if (p2 === "sim") {
        numSim += 1;
    }
    if (p3 === "sim") {
        numSim += 1;
    }
    if (p4 === "sim") {
        numSim += 1;
    }

    if (p5 === "sim") {
        numSim += 1;
    }
    return numSim;
}

function classifica(numSim){
    if (numSim === 5){
        console.log("Assasino");
    } else if (numSim === 3 || numSim === 4) {
        console.log("Cumplice");
    } else if (numSim === 2) {
            console.log("Suspeito");
    } else {
        console.log("Inocente");
    }
}

classifica(interrogatorio()); */


function geraRelatorio (array) {
    let contAprovados = 0;
    let contReprovados =0;
    for (const nota of array) {
        if(nota >= 7 ) {
            contAprovados += 1;
        } else {
            contReprovados += 1;
        }
    }

    return `Aprovados: + ${contAprovados} Reprovados: + ${contReprovados}`;
}

console.log(geraRelatorio([10, 8, 5, 6 ,7, 4, 3, 1, 2, 7, 8, 4 ,5 ,6, 8, 8 ]));
     