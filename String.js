let name = "Raquel";  // a string está associada dentro da variavel name
let sobrenome = "Lisboa";
console.log(name + " " + sobrenome);
//length: Retorna o comprimento da string.
let str = "Hello, world!";
console.log(str.length); 

//console.log(str.charAt(1)): Retorna o caractere de uma string em um índice específico.
console.log(str.charAt(1)); 

//substring(start, end): Retorna uma parte da string entre os índices start e end.
console.log(str.substring(0, 5)); 

//slice(start, end): Similar ao substring, mas também aceita índices negativos.
console.log(str.slice(0, 5)); 
console.log(str.slice(-6)); 

//indexOf(substring): Retorna o índice da primeira ocorrência da substring especificada.
console.log(str.indexOf("world"));

//lastIndexOf(substring): Retorna o índice da última ocorrência da substring especificada.
console.log(str.lastIndexOf("o")); 

//split(separator): Divide a string em um array de substrings usando o separador especificado.
console.log(str.split(", ")); 

//replace(substring, newSubstring): Substitui a primeira ocorrência da substring especificada pela nova substring.
console.log(str.replace("world", "everyone")); 

//toUpperCase(): Converte a string para maiúsculas.
console.log(str.toUpperCase()); 

//toLowerCase(): Converte a string para minúsculas.
console.log(str.toLowerCase()); 

/*concat(): Esse método é usado para concatenar (juntar) duas ou mais strings. Ele retorna uma nova string, que é a
combinação das strings passadas como argumentos. */
let newStr = str.concat(" How are you?");
console.log(newStr); 

//charCodeAt(): Esse método retorna o valor Unicode do caractere na posição especificada na string.
let charCode = str.charCodeAt(0);
console.log(charCode); 

/*localeCompare(): Esse método compara duas strings em ordem alfabética, levando em consideração a localização
(locale). Ele retorna um número indicando se a string de referência vem antes, depois ou é igual à string comparada.*/
let comparison = str.localeCompare("Hello, everyone!");
console.log(comparison);

//search(): Esse método procura uma correspondência entre uma expressão regular e a string. Ele retorna o índice da
// primeira correspondência ou -1 se nenhuma correspondência for encontrada.
let index = str.search("world");
console.log(index); 

//valueOf(): Esse método retorna o valor primitivo da string.
let primitiveValue = str.valueOf();
console.log(primitiveValue); 

//toString(): Esse método retorna uma string representando o objeto. Para strings, toString() geralmente retorna 
// a mesma string.
let stringRepresentation = str.toString();
console.log(stringRepresentation); 