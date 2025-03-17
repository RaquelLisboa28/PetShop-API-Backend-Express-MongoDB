/* Utilizando o If / Else, crie um codigo que:
- verefica se uma cidade é pequena ou grande
- cidade grande possui mais de 300mil habitantes. */

/*O if e o else são estruturas de controle de fluxo em JavaScript que permitem que você execute diferentes blocos 
de código com base em condições específicas. Vamos entender como funcionam e ver alguns exemplos. 
- if: Avalia uma condição. Se a condição for verdadeira, o bloco de código dentro do if é executado.
- else: Se a condição do if for falsa, o bloco de código dentro do else é executado.
  If - SE / Else - SE NÃO  */

//1. Exemplo Simples
let idade = 18;

if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}


//2. Verificando Par ou Ímpar
let numero = 5;

if (numero % 2 === 0) {
    console.log("O número é par.");
} else {
    console.log("O número é ímpar.");
}


//3. Usando else if para Múltiplas Condições
let nota = 75;

if (nota >= 90) {
    console.log("Aprovado com Distinção.");
} else if (nota >= 60) {
    console.log("Aprovado.");
} else {
    console.log("Reprovado.");
}


//4. Verificando a Temperatura
let temperatura = 30;

if (temperatura > 25) {
    console.log("Está quente.");
} else if (temperatura < 15) {
    console.log("Está frio.");
} else {
    console.log("A temperatura está agradável.");
}


//5. Verificando se um Número é Positivo, Negativo ou Zero
let number = -10;

if (number > 0) {
    console.log("O número é positivo.");
} else if (number < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}


//6. Autenticação Simples
let usuario = "admin";
let senha = "1234";

if (usuario === "admin" && senha === "1234") {
    console.log("Acesso concedido.");
} else {
    console.log("Acesso negado.");
}


/*Em JavaScript, switch é muito útil para avaliar uma variável e executar diferentes blocos de código com base 
em seu valor. Ele é frequentemente usado quando temos várias condições relacionadas a um mesmo valor, tornando o 
código mais organizado do que uma sequência de if-else.*/

// Exemplo: Verificando o dia da semana
let dia = 3;

switch (dia) {
    case 1:
        console.log("Segunda-feira");
        break;
    case 2:
        console.log("Terça-feira");
        break;
    case 3:
        console.log("Quarta-feira");
        break;
    case 4:
        console.log("Quinta-feira");
        break;
    case 5:
        console.log("Sexta-feira");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Dia inválido");
}

//Exemplo: verificando o tipo de usuário
let usuarios = "admin";

switch (usuarios) {
    case "admin":
        console.log("Acesso total concedido.");
        break;
    case "editor":
        console.log("Acesso para editar conteúdos.");
        break;
    case "visitante":
        console.log("Acesso somente para visualização.");
        break;
    default:
        console.log("Usuário não reconhecido.");
}

/*Quando há múltiplas comparações contra o mesmo valor.
✅ Quando os valores são fixos e previsíveis (exemplo: status, tipos de usuário, códigos de erro).
✅ Para tornar o código mais organizado e legível em comparação a muitos if-else.

⚠️ Evite usar switch quando:
❌ Os valores antes dos números numéricos (exemplo: if (idade >= 18)).
❌ Houve muitas comparações complexas , pois if-else pode ser mais flexível.*/



/* Operador Ternário ( ? :) em JavaScript
O operador ternário em JavaScript é um formato curto e elegante de escrever uma estrutura condicional if-else. 
Ele permite que você tome decisões de maneira mais compacta e muito utilizada para atribuições rápidas de valores.

(condicao) ? valor_se_verdadeiro : valor_se_falso;

Explicação:
Se a condição for true, retorna o valor antes dos: .
Se condição for false, retorna o valor depois dos: .*/

// Exemplo 1: Verifique se um número é par ou ímpar


let number1 = 10;
let resultado = (number1 % 2 === 0) ? "Par" : "Ímpar";

console.log(resultado);

/*O que acontece aqui?
Se numero % 2 === 0for verdadeiro → retorna "Par".
Se for falso → retorna "Ímpar". */

// Exemplo 2: Verificando a maioria

let age = 18;
let status1 = (age >= 18) ? "Maior de idade" : "Menor de idade";

console.log(status1);

//if/else simplificado em uma linha

// Exemplo 3: Operador ternário dentro de umconsole.log

let temperature = 30;
console.log(temperature > 25 ? "Está quente" : "Está frio");

/* Exemplo 4: Utilizando o operador ternário para reservar classes em HTML (React)
No desenvolvimento do React.js , é comum usar o ternário do operador para definir classes dinamicamente: */

<button className={ativo ? "btn-ativo" : "btn-inativo"}>
    Clique Aqui
</button>

/* Se ativo === true, a aula será "btn-ativo".
Se ativo === false, a aula será "btn-inativo" 

Quando usar o operador ternário?
✅ Quando precisamos de uma condição simples e queremos escrever menos código.
✅ Quando queremos retornar um valor diretamente (como strings, números, classes CSS, etc.).
✅ Quando precisar deixar o código mais legível e elegante .

❌ Evite o operador ternário quando:
Uma lógica para muito complexa (muitos ? :aninados podem dificultar a leitura).
A condição tem muitas ações diferentes (prefira if-else). */
