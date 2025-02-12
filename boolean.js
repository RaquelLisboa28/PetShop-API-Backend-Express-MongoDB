//Em JavaScript, um valor booleano representa um valor verdadeiro (true) ou falso (false).
let verdadeiro = true;
let falso = false;

//Os operadores de comparação são usados para comparar valores e retornam um valor booleano (true ou false)
// Menor que < :Verifica se o valor à esquerda é menor que o valor à direita.
console.log(5 < 10);  
console.log(10 < 5);  

//Maior que > : Verifica se o valor à esquerda é maior que o valor à direita.
console.log(10 > 5); 
console.log(5 > 10);  

//Menor ou igual a <= :Verifica se o valor à esquerda é menor ou igual ao valor à direita.
console.log(5 <= 10); 
console.log(10 <= 10); 
console.log(10 <= 5); 

//Maior ou igual a >= :Verifica se o valor à esquerda é maior ou igual ao valor à direita.
console.log(10 >= 5); 
console.log(10 >= 10); 
console.log(5 >= 10); 

//Igual a == :Verifica se os valores são iguais, mas não verifica o tipo.
console.log(5 == 5);  
console.log(5 == '5');
console.log(5 == 10); 

//Estritamente igual a === :Verifica se os valores são iguais e do mesmo tipo
console.log(5 === 5);  
console.log(5 === '5'); 

//Diferente de != :Verifica se os valores são diferentes, mas não verifica o tipo.
console.log(5 != 10); 
console.log(5 != '5');

//Estritamente diferente de !== : Verifica se os valores são diferentes e de tipos diferentes.
console.log(5 !== 10);  
console.log(5 !== '5'); 
console.log(5 !== 5);   

//Os operadores lógicos são usados para combinar expressões booleanas
//Operador And &&: Retorna true se ambas as expressões forem verdadeiras.
console.log(true && true);   
console.log(true && false);  
console.log(false && false); 
console.log(5 < 10 && 10 < 15); 

//Operador OR || :Retorna true se pelo menos uma das expressões for verdadeira.
console.log(true || false); 
console.log(false || false); 
console.log(5 < 10 || 10 > 15); 

//Operador NOT ! :Inverte o valor booleano da expressão.
console.log(!true);  
console.log(!false); 
console.log(!(5 < 10)); 

//EXEMPLOS
let x = 5;
let y = 10;
let z = 15;

console.log(x < y && y < z);  
console.log(x > y || y < z);   
console.log(!(x > y));        

// Usando operadores de comparação e lógicos juntos
let isAdult = true;
let hasPermission = false;

let canEnter = isAdult && hasPermission;
console.log(canEnter); // (precisa ser adulto e ter permissão)

