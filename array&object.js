// Array: Um array é uma lista ordenada de elementos, onde cada elemento pode ser acessado através de um índice 
// numérico.  Dentro de colchetes []
let frutas = ["Maçã", "Banana", "Laranja"];

//push(): Adiciona um ou mais elementos ao final do array.
frutas.push("Manga");
console.log(frutas); 
const citrico = frutas[2];

//pop(): Remove o último elemento do array e retorna esse elemento.
let ultimaFruta = frutas.pop();
console.log(ultimaFruta);
console.log(frutas); 

//shift(): Remove o primeiro elemento do array e retorna esse elemento.
let primeiraFruta = frutas.shift();
console.log(primeiraFruta);
console.log(frutas);

//unshift(): Adiciona um ou mais elementos ao início do array.
frutas.unshift("Morango");
console.log(frutas); 

//reverse(): Inverte a ordem dos elementos no array.
frutas.reverse();
console.log(frutas); 

//sort(): Ordena os elementos do array.
frutas.sort();
console.log(frutas); 

//O método find retorna o primeiro elemento do array que satisfaz a condição fornecida por uma função de teste.
frutas.find(function(fruta) {
  return fruta === "Banana";
});
console.log(frutas); 

//O método filter cria um novo array com todos os elementos que passam no teste implementado pela função fornecida.
frutas.filter(function(fruta) {
  return fruta.includes("a");
});
console.log(frutas); 


//O método findIndex retorna o índice do primeiro elemento no array que satisfaz a condição fornecida por uma 
// função de teste. Caso contrário, retorna -1.

let indiceDaFruta = frutas.findIndex(function(fruta) {
  return fruta === "Laranja";
});
console.log(indiceDaFruta); 

//map(): Cria um novo array com os resultados da chamada de uma função para cada elemento do array.
let numeros = [1, 4, 9];
let numerosDobrados = numeros.map(function(numero) {
  return numero * 2;
});
console.log(numerosDobrados);

//O método reduce aplica uma função a um acumulador e a cada valor do array (da esquerda para a direita) para 
// reduzir o array a um único valor.
let soma = numeros.reduce(function(acumulador, valorAtual) {
  return acumulador + valorAtual;
}, 0);
console.log(soma);

// O método some testa se pelo menos um dos elementos no array passa no teste implementado pela função fornecida. 
// Retorna um valor booleano.
let existeMaiorQueTres = numeros.some(function(numero) {
  return numero > 3;
});
console.log(existeMaiorQueTres); 

//O método every testa se todos os elementos no array passam no teste implementado pela função fornecida. 
// Retorna um valor booleano.
let todosSaoMenoresQueCinco = numeros.every(function(numero) {
  return numero < 5;
});
console.log(todosSaoMenoresQueCinco);



//Object: Um objeto é uma coleção de propriedades, onde cada propriedade é um par de chave-valor. {}
let pessoa = {
    nome: "João",
    idade: 30,
    profissao: "Desenvolvedor" ,
    nomePai: "João"
  };
const pessoa2 = {
  nome: "Cristiano",
  idade: 75,
  profissao: "gerente",
  nomePai: "Cristiano"
};

const fichario = [ 
  pessoa, 
  pessoa2,
];

//Para procurar uma informação dentro dos objetos.
const pessoaEncontrada = fichario.find(item => item.idade === 75);
  console.log(pessoaEncontrada);

//acesso via (.) ponto.
console.log(pessoa.nome); 
pessoa.idade = 31;
console.log(pessoa.idade);

//acesso via [] colchetes
console.log(pessoa["profissao"]); 
pessoa["profissao"] = "Engenheiro";
console.log(pessoa["profissao"]); 

//Object.keys(): Retorna um array contendo as chaves (propriedades) do objeto
let chaves = Object.keys(pessoa);
console.log(chaves); 

//Object.values(): Retorna um array contendo os valores das propriedades do objeto.
let valores = Object.values(pessoa);
console.log(valores); 

//Object.entries(): Retorna um array de arrays, onde cada sub-array é um par [chave, valor].
let entradas = Object.entries(pessoa);
console.log(entradas); 

//EXEMPLO DE ARRAY E OBJETO
let carros = [
    { marca: "Toyota", modelo: "Corolla", ano: 2020 },
    { marca: "Honda", modelo: "Civic", ano: 2019 },
    { marca: "Ford", modelo: "Mustang", ano: 2018 }
  ];
  
  // Adicionando um novo carro ao array
  carros.push({ marca: "Chevrolet", modelo: "Camaro", ano: 2021 });
  console.log(carros);
  
  // Removendo o último carro do array
  let ultimoCarro = carros.pop();
  console.log(ultimoCarro);
  console.log(carros);
  
  // Ordenando os carros pelo ano (mais novo primeiro)
  carros.sort(function(a, b) {
    return b.ano - a.ano;
  });
  console.log(carros);
  

