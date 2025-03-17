/* Array: Um array é uma lista ordenada de elementos, onde cada elemento pode ser acessado através de um índice 
 numérico.  Dentro de colchetes []. Conjunto de dados agrupados entre colchetes[].*/

 let frutas = ["Maçã", "Banana", "Laranja"];

/*splice: array.splice(inicio, quantidade, item1, item2, ...); REMOVE E ADICIONA ELEMENTO NO LUGAR CASO QUEIRA ADD
inicio: O índice onde começar a alteração.
quantidade: O número de elementos a serem removidos a partir do inicio.
item1, item2, ... (opcional): Os elementos a serem adicionados no lugar dos elementos removidos. */

frutas.splice(1, 1); // Remove 1 elemento a partir do índice 1 ("Banana")
console.log(frutas); // ["Maçã", "Laranja"]

frutas.splice(1, 0, "Morango", "Abacaxi"); //Adiciona "Morango" e "Abacaxi" a partir do índice 1, sem remover nenhum elemento
console.log(frutas); // ["Maçã", "Morango", "Abacaxi", "Banana", "Laranja"]

frutas.splice(2, 1, "Uva"); // Remove 1 elemento a partir do índice 2 ("Abacaxi") e adiciona "Uva" no lugar
console.log(frutas); // ["Maçã", "Morango", "Uva", "Banana", "Laranja"]

/*concat:é usado para unir dois ou mais arrays. Esse método não altera os arrays existentes, mas retorna um novo
array que contém todos os elementos dos arrays unidos.*/

let outrasFrutas = ["Morango", "Abacaxi"];
let todasAsFrutas = frutas.concat(outrasFrutas);
console.log(todasAsFrutas); // ["Maçã", "Banana", "Laranja", "Morango", "Abacaxi"]

let frutasExoticas = ["Kiwi", "Manga"];
let todasAsFrutas1= frutas.concat(outrasFrutas, frutasExoticas);
console.log(todasAsFrutas); // ["Maçã", "Banana", "Laranja", "Morango", "Abacaxi", "Kiwi", "Manga"]

let maisFrutas = frutas.concat("Melancia", "Pêssego");
console.log(maisFrutas); // ["Maçã", "Banana", "Laranja", "Melancia", "Pêssego"]

/*Spred(...): permite que um array ou objeto seja expandido em lugares onde zero ou mais elementos/valores são 
esperados. */

let frutas1 = ["Maçã", "Banana", "Laranja"];
let maisFrutas1 = ["Morango", "Abacaxi"];
let todasAsFruta = [...frutas1, ...maisFrutas1];
console.log(todasAsFruta); // ["Maçã", "Banana", "Laranja", "Morango", "Abacaxi"]


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

//Find: retorna o primeiro elemento do array que satisfaz a condição fornecida por uma função de teste.
frutas.find(function(fruta) {
  return fruta === "Banana";
});
console.log(frutas); 

// Propriedade Length: A propriedade length em um array é usada para retornar o número total de elementos presentes 
// no array. É muito útil quando você precisa saber a quantidade de itens armazenados em um array.
// Usando a propriedade length para obter o número de elementos no array
let quantidadeDeFrutas = frutas.length;

console.log(`O array frutas possui ${quantidadeDeFrutas} elementos.`);


/*filter: cria um novo array com todos os elementos que passam no teste implementado pela função fornecida.
function(valor, indice, array) - Usado para filtrar o array. */
frutas.filter(function(fruta) {
  return fruta.includes("a");
});
console.log(frutas); 

const people = [
  {nome: 'Luiz', idade:62 },
  {nome: 'Maria', idade:23 },
  {nome: 'Eduardo', idade:55 },
  {nome: 'Letícia', idade:19 },
  {nome: 'Rosana', idade:65 },
  {nome: 'Wallace', idade:47 },
];
const pessoasComNomeGrande = people.filter(function(obj){
 return  obj.nome.length >= 7;
});
const idadeMaiorQue50 = people.filter( obj => obj.idade >= 50 );
const nomeTerminaComA = people.filter (obj => {
  return obj.nome.toLocaleLowerCase().endsWith('a');
})
//Forma simplificada: const pessoasComNomeGrande = people.filer(obj => obj.nome.length >= 7;)
console.log(pessoasComNomeGrande);
console.log(idadeMaiorQue50);
console.log(nomeTerminaComA);

/*findIndex: retorna o índice do primeiro elemento no array que satisfaz a condição fornecida por uma 
 função de teste. Caso contrário, retorna -1.*/

let indiceDaFruta = frutas.findIndex(function(fruta) {
  return fruta === "Laranja";
});
console.log(indiceDaFruta); 

/*map(): Cria um novo array com os resultados da chamada de uma função para cada elemento do array. 
function ( valor, indice, array) - usado para alterar todos os elementos ou alguns elementos do array. */
let numeros = [1, 4, 9];
let numerosDobrados = numeros.map(function(numero) {
  return numero * 2;
});
console.log(numerosDobrados);

const number = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numberEmDobro = number.map( valor => valor * 2 );
console.log(numberEmDobro);

const apenasNomeDasPessoas = people.map ( obj => obj.nome);
console.log(apenasNomeDasPessoas);

/*Reduce: aplica uma função a um acumulador e a cada valor do array (da esquerda para a direita) para 
 reduzir o array a um único valor. function (acumulador, valor, indice, array) - ele soma todos os valores do array
 para reduzir a um valor total. */
let soma = numeros.reduce(function(acumulador, valorAtual) {
  return acumulador + valorAtual;
}, 0);
console.log(soma);

//soma de todos os numeros
const total = number.reduce(function(acumulador, valor, indice, array) {
  acumulador += valor;
  return acumulador;
}, 0);
console.log (total);

//Retorne um array com os pares(Filter)
const total1 = number.reduce(function(acumulador, valor, indice, array){
  if (valor % 2 === 0) acumulador.push(valor); 
  return acumulador;
}, []);
console.log(total1);

//Retorne um array com o dobro dos valores (Map)
const total2 = number.reduce(function(acumulador, valor){
  acumulador.push(valor * 2); 
  return acumulador;
}, []);
console.log(total2);

//Retorne a pessoa mais velha
const maisVelha = people.reduce(function(acumulador, valor){
  if(acumulador.idade > valor.idade) return acumulador;
  return valor;
}) 
console.log(maisVelha);

/* Some: testa se pelo menos um dos elementos no array passa no teste implementado pela função fornecida. 
 Retorna um valor booleano.*/
let existeMaiorQueTres = numeros.some(function(numero) {
  return numero > 3;
});
console.log(existeMaiorQueTres); 

/*Every: testa se todos os elementos no array passam no teste implementado pela função fornecida. 
 Retorna um valor booleano.*/
let todosSaoMenoresQueCinco = numeros.every(function(numero) {
  return numero < 5;
});
console.log(todosSaoMenoresQueCinco);

//Array Bidimensionais : Coleções de itens organizados como uma matriz de linhas e colunas. É Array de Array.
const clientes = [["Manuel", 24, true], ["Edval", 24, false], ["Raphael", 19, true]];
console.table(clientes);
console.log(clientes);










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

// chaves: name, surname, age, falarNome, getDataNascimento.
// valores: Maria, Santana, 36, function, function.
  const people1 = new Object ();
    people1.name = 'Maria';
    people1.surname = 'Santana';
    people1.age =  36;
    people1.falarNome = function() {
      return (`${this.name} esta falando seu nome.`);
    };
console.log(people1.falarNome());

  people1.getDataNascimento = function() {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.age;
 };
console.log(people1.getDataNascimento());

  for (let chave in people1) {
    console.log(chave);
    console.log(people1[chave]);
  };


  //Factory Function - Constructor Function - Classes
  class people2 {
  constructor(name1, surname1) {
    this.name1 = name1;
    this.surname1 = surname1;
  }
  }
  //objeto.freeze() - Não deixa o objeto ser alterado. Fica travado, congelado. (funciona em array).
  //new cria um objeto {} vazio, ela pega a palavra -> this (é uma palavra chave) atrela a palavra ao objeto.
const p = new people2 ('Bernardo', 'Miranda');
console.log(p);

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


const car = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2025
}

console.log(car.marca);
console.log(car.modelo);
console.log(car.ano);


const person = {
  nome: "Raquel",
  idade: 23,
  apresentar() {
      return `Olá, meu é ${this.nome} e tenho ${this.idade} anos.`
  }
}

console.log(person.apresentar()) 

const student = {
  name: "Pablo",
  course: "Programador",
  };

  console.log(student);
//adicionando uma propriedade
student.nota = 9.5;
//removendo uma propriedade
delete student.course;
console.log(student);

// Resolução
const produto = {
  nome: "Teclado Mecânico",
  preco: 250,
  estoque: 15
};

for (let chave in produto) {
  console.log(`${chave}: ${produto}`)
    }


    // Função construtora
function car1(marca, modelo, ano) {
  this.marca = marca;
  this.modelo = modelo;
  this.ano = ano;

  this.detalhes = function() {
      return `Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}`;
  };
}

// Criando dois objetos diferentes usando a função construtora
const carro1 = new car1("Toyota", "Corolla", 2022);
const carro2 = new car1("Honda", "Civic", 2023);

// Exibindo no console
console.log(carro1.detalhes()); // "Carro: Toyota Corolla, Ano: 2022"
console.log(carro2.detalhes()); // "Carro: Honda Civic, Ano: 2023"
