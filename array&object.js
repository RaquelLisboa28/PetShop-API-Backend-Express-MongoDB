/* Array: Um array é uma lista ordenada de elementos, onde cada elemento pode ser acessado através de um índice 
 numérico.  Dentro de colchetes []. Conjunto de dados agrupados entre colchetes[].*/
let frutas = ["Maçã", "Banana", "Laranja"];
/*splice: array.splice(inicio, quantidade, item1, item2, ...);
inicio: O índice onde começar a alteração.
quantidade: O número de elementos a serem removidos a partir do inicio.
item1, item2, ... (opcional): Os elementos a serem adicionados no lugar dos elementos removidos. */
frutas.splice(1, 1); // Remove 1 elemento a partir do índice 1 ("Banana")
console.log(frutas); // ["Maçã", "Laranja"]
frutas.splice(1, 0, "Morango", "Abacaxi"); // Adiciona "Morango" e "Abacaxi" a partir do índice 1, sem remover nenhum elemento
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
 reduzir o array a um único valor. function (acumulador, valot, indice, array) - ele soma todos os valores do array
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
  



 /*Os Getters são usados para obter o valor de uma propriedade. Eles são definidos usando a palavra-chave get. */
  
  class Pessoa {
    constructor(nome) {
      this._nome = nome;
    }
  
    get nome() {
      return this._nome;
    }
  }
  
  const pessoa = new Pessoa("João");
  console.log(pessoa.nome); // Saída: João

  /*Aqui, a propriedade nome é acessada como se fosse uma propriedade regular, mas na verdade está chamando a função 
  get nome(). *

  Os Setters são usados para definir o valor de uma propriedade. Eles são definidos usando a palavra-chave set. */
  
  class Pessoa {
    constructor(nome) {
      this._nome = nome;
    }
  
    get nome() {
      return this._nome;
    }
  
    set nome(novoNome) {
      if (novoNome.length >= 3) {
        this._nome = novoNome;
      } else {
        console.log("Nome deve ter pelo menos 3 caracteres.");
      }
    }
  }
  
  const pessoa = new Pessoa("João");
  pessoa.nome = "Ana"; // Definindo um novo valor para nome
  console.log(pessoa.nome); // Saída: Ana
  pessoa.nome = "Al"; // Saída: Nome deve ter pelo menos 3 caracteres.
  
 /* No exemplo acima, a função set nome(novoNome) permite definir um novo valor para a propriedade nome, mas com uma validação: o nome deve ter pelo menos 3 caracteres.
  Usando Getters e Setters de Forma Correta
  Validação e Lógica: Use setters para adicionar validações e lógica antes de alterar uma propriedade. Assim, você 
  mantém a integridade dos dados.
  Encapsulamento: Use getters e setters para encapsular propriedades e evitar acesso direto a elas. Isso torna o 
  código mais seguro e modular.
  Interface Consistente: Getters e setters permitem que você mude a implementação interna sem alterar a interface 
  externa do objeto. Os usuários do objeto não precisam saber se uma propriedade é acessada diretamente ou através 
  de um getter/setter.*/



/*Métodos são funções associadas a um objeto. Eles permitem que os objetos realizem ações e manipulem seus dados.
Existem duas formas principais de definir métodos em objetos: usando a sintaxe literal de objeto e usando classes.
Com a sintaxe literal de objeto, você pode definir métodos diretamente dentro do objeto.*/

const cachorro = {
  nome: "Rex",
  idade: 5,
  latir: function() {
    console.log("Au au!");
  }
};

cachorro.latir(); // Saída: Au au!
//Aqui, latir é um método do objeto cachorro.


//Com Classes, você pode definir métodos dentro da definição da classe.

class Gato {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  miar() {
    console.log("Miau!");
  }
}

const gato = new Gato("Whiskers", 3);
gato.miar(); // Saída: Miau!
//Aqui, miar é um método da classe Gato.

/*Usando Métodos de Forma Correta
Modularidade: Separe o código em métodos pequenos e focados, cada um realizando uma única tarefa. Isso facilita a 
manutenção e reutilização do código.
Nomes Descritivos: Dê nomes claros e descritivos aos métodos para que seu propósito seja facilmente compreendido. 
Por exemplo, calcularIdade é mais descritivo que calcular.
Parâmetros e Retorno: Use parâmetros para passar informações aos métodos e retorne valores quando necessário. Isso 
permite que os métodos sejam mais flexíveis e reutilizáveis.
Encapsulamento: Use métodos para encapsular a lógica do objeto, evitando o acesso direto às propriedades. Isso ajuda 
a proteger os dados internos e manter a consistência do objeto.*/

class Carro {
  constructor(modelo, ano) {
    this.modelo = modelo;
    this.ano = ano;
    this._velocidade = 0; // Propriedade privada
  }

  acelerar() {
    this._velocidade += 10;
    console.log(`A velocidade atual é ${this._velocidade} km/h`);
  }

  frear() {
    this._velocidade -= 10;
    console.log(`A velocidade atual é ${this._velocidade} km/h`);
  }

  get velocidade() {
    return this._velocidade;
  }
}

const carro = new Carro("Fusca", 1975);
carro.acelerar(); // Saída: A velocidade atual é 10 km/h
carro.frear();    // Saída: A velocidade atual é 0 km/h
console.log(carro.velocidade); // Saída: 0
/*Neste exemplo, os métodos acelerar e frear modificam a propriedade privada _velocidade, enquanto o método getter
 velocidade permite acessar seu valor.*/

 