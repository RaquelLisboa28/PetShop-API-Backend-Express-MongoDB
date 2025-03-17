/*Em JavaScript é uma função que pertence ao protótipo de arrays. Ele é usado para encontrar o primeiro elemento em 
um array que satisfaz uma condição específica definida por uma função de teste. Se nenhum elemento for encontrado, 
ele retorna undefined*/

/*array.find(callback(element[, index[, array]])[, thisArg])
- callback: Uma função que é chamada para cada elemento do array. Ela recebe três argumentos:
- element: O elemento atual que está sendo processado no array.
- index (opcional): O índice do elemento atual.
- array (opcional): O array que está sendo percorrido.
- thisArg (opcional): Um valor a ser usado como: this - quando a função de callback é chamada.*/

//Exemplo 1: Encontrando um número em um array
const numbers = [1, 2, 3, 4, 5];

const found = numbers.find(element => element > 3);

console.log(found); // Saida: 4
//Find procura o primeiro número que é maior que 3 e retorna 4.

//Exemplo 2: Encontrando um objeto em um array
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

const user = users.find(user => user.id === 2);

console.log(user); // Saída: { id: 2, name: 'Bob' }
// Aqui, estamos procurando um objeto no array users onde o id é igual a 2. O resultado é o objeto correspondente.

//Exemplo 3: Quando nenhum elemento é encontrado
const numberss = [1, 2, 3];

const founds = numberss.find(element => element > 5);

console.log(founds); // Saída: undefined
//Neste caso, como não há nenhum número maior que 5, o método find retorna undefined

//Exemplo 4: Encontrando um produto em um array de objetos
const products = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Smartphone', price: 500 },
  { id: 3, name: 'Tablet', price: 300 }
];

const foundProduct = products.find(product => product.name === 'Smartphone');

console.log(foundProduct); // Saída: { id: 2, name: 'Smartphone', price: 500 }
//Neste exemplo, estamos procurando um produto pelo nome "Smartphone" e o método find retorna o objeto correspondente.

//Exemplo 5: Encontrando um usuário com base em uma propriedade
const userss = [
  { username: 'john_doe', age: 25 },
  { username: 'jane_smith', age: 30 },
  { username: 'alice_jones', age: 28 }
];

const use = userss.find(user => user.age === 30);

console.log(use); // Saída: { username: 'jane_smith', age: 30 }
//Aqui, estamos buscando um usuário que tenha 30 anos. O método retorna o objeto do usuário correspondente.

//Exemplo 6: Usando find com um array de strings
const fruits = ['apple', 'banana', 'cherry', 'date'];

const foundFruit = fruits.find(fruit => fruit.startsWith('b'));

console.log(foundFruit); // Saída: 'banana'
//Neste caso, estamos procurando a primeira fruta que começa com a letra "b". O resultado é "banana".

//Exemplo 7: Encontrando um objeto com múltiplas condições
const employees = [
  { id: 1, name: 'Alice', department: 'HR' },
  { id: 2, name: 'Bob', department: 'Engineering' },
  { id: 3, name: 'Charlie', department: 'Engineering' }
];

const engineer = employees.find(emp => emp.department === 'Engineering' && emp.name.startsWith('B'));

console.log(engineer); // Saída: { id: 2, name: 'Bob', department: 'Engineering' }
/*Neste exemplo, estamos procurando um engenheiro cujo nome começa com "B". O método find retorna o objeto 
correspondente. */

/* Exemplo 8: Se você quisesse encontrar um livro específico na biblioteca, poderia usar a função Find 
para procurar pelo título. Por exemplo, se você quisesse encontrar o livro "1984": */
const biblioteca = {
  "biblioteca": {
    "nome": "Biblioteca Central",
    "localizacao": "Centro da Cidade",
    "livros": [
      { "titulo": "O Senhor dos Anéis", "autor": "J.R.R. Tolkien", "ano": 1954 },
      { "titulo": "1984", "autor": "George Orwell", "ano": 1949 }
    ]
  }
};

const livroEncontrado = biblioteca.biblioteca.livros.find(livro => livro.titulo === "1984");
console.log(livroEncontrado);

/* Exemplo 9: Para encontrar um aluno específico em uma turma, você poderia usar a função Find
da seguinte maneira. Por exemplo, se você quisesse encontrar a aluna "Maria"*/
const escola = {
  "escola": {
    "nome": "Escola Primária",
    "endereco": "Rua das Flores, 123",
    "turmas": [
      { "serie": "1º Ano", "alunos": [{ "nome": "Ana", "idade": 7 }, { "nome": "Pedro", "idade": 7 }] },
      { "serie": "2º Ano", "alunos": [{ "nome": "Maria", "idade": 8 }, { "nome": "João", "idade": 8 }] }
    ]
  }
};

const alunoEncontrado = escola.escola.turmas[1].alunos.find(aluno => aluno.nome === "Maria");
console.log(alunoEncontrado);

/*Exemplo 10: Se você quisesse encontrar um prato específico no cardápio do restaurante, poderia usar a função Find
assim. Por exemplo, para encontrar o prato "Bolo de Cenoura"*/
const restaurante = {
  "restaurante": {
    "nome": "Sabor da Terra",
    "tipo": "Comida Caseira",
    "cardapio": [
      { "prato": "Feijoada", "ingredientes": [{ "nome": "Feijão Preto", "quantidade": "500g" }, { "nome": "Carne Seca", "quantidade": "300g" }] },
      { "prato": "Bolo de Cenoura", "ingredientes": [{ "nome": "Cenoura", "quantidade": "200g" }, { "nome": "Açúcar", "quantidade": "150g" }] }
    ]
  }
};

const pratoEncontrado = restaurante.restaurante.cardapio.find(prato => prato.prato === "Bolo de Cenoura");
console.log(pratoEncontrado);