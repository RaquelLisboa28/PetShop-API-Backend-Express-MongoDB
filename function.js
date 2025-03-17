/*O que são funções em JavaScript? Uma função em JavaScript é um bloco de código reutilizável que executa uma 
ação específica. Ela nos ajuda a organizar e reaproveitar o código sem precisar repetir a mesma coisa várias vezes.
TRECHO DE CODIGO - PODE SER REUTILIADO VARIAS VEZS.
SÓ VAI SER EXECUTADO QUANDO FOR CHAMADO/INVOCADO

1.Função Void: É uma função que não retorna nenhum valor. Ela pode executar uma ação, mas não fornece um resultado.*/
   function saudacao() {
       console.log("Olá, bem-vindo!");
   }

   saudacao(); // Chama a função e imprime "Olá, bem-vindo!"

   function dizerOla() {
    console.log("Olá, mundo!");
}

// Chamando a função
dizerOla(); // Saída: Olá, mundo!

//2.Função com Parâmetros:Essas funções aceitam entradas (parâmetros) que podem ser usadas dentro do corpo da função.
   function somar(a, b) {
       console.log(a + b);
   }

   somar(5, 3); // Chama a função e imprime 8
   
   function verificarParImpar(numero) {
    return numero % 2 === 0 ? "Par" : "Ímpar";
}

  console.log(verificarParImpar(10));

  function cumprimentar(nome) {
    console.log("Olá, " + nome + "!");
}

cumprimentar("Raquel");  
cumprimentar("Carlos");

//Criamos uma função cumprimentar(nome), onde nome é um PARÂMETRO.

//3.Função Return: Essas funções retornam um valor. Você pode usar o valor retornado em outras partes do seu código.
   function multiplicar(a, b) {
       return a * b;
   }

   const resultado = multiplicar(4, 5);
   console.log(resultado); // Chama a função e imprime 20
   
   function calcularPerimetro(lado) {
    return lado * 4; // Retorna o perímetro de um quadrado
}

   console.log(calcularPerimetro(10));

   function add(a, b) {
    return a + b; 
}

let result = add(5, 3);
console.log(resultado); 

/* Criamos somar(a, b), que recebe dois números.
 A função retorna ( return) a soma deles.
 Depois, salvamos o resultado em uma variável resultado.*/


/* 4.Arrow Function: Uma forma mais concisa de escrever funções em JavaScript.Elas são especialmente úteis para 
funções curtas.*/
   const subtrair = (a, b) => a - b;

   console.log(subtrair(10, 4)); // Chama a função e imprime 6

   const dividir = (a, b) => b !== 0 ? a / b : "Divisão por zero não é permitida";

   console.log(dividir(10, 2));

   const divide = (a, b) => a / b;

   console.log(divide(10, 2));

//Se o código tem apenas um retorno , podemos omitir {}e return.

//5.Função Anonima:Uma função anônima é uma função sem nome atribuída a uma variável.
const multiplicar = function(x, y) {
    return x * y;
};

console.log(multiplicar(4, 2));  // Saída: 8
/*Criamos uma função e guardamos na variável multiplicar.
Chamamos multiplicar(4, 2)para multiplicar os números.*/

// 6.Função com Valor Padrão: Podemos definir valores padrão para configurações caso não sejam passadas.
function saudar(nome = "Visitante") {
    console.log("Bem-vindo, " + nome + "!");
}

saudar();        // Saída: Bem-vindo, Visitante!
saudar("Ana");   // Saída: Bem-vindo, Ana!


/* Resumo:
- Funções são usadas para encapsular código que pode ser reutilizado.
- Funções void não retornam valores.
- Funções com parâmetros aceitam entradas.
- Funções return retornam um valor que pode ser usado posteriormente.
- Arrow functions oferecem uma sintaxe mais curta e moderna.*/