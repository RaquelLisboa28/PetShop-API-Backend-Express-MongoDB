const number = [1, 2, 3, 4, 5];
console.log(number)
let frutas =['maçã', 'banana', 'laranja', 'tangerina', 'uva'];
console.log(frutas)
let misto =[ 1, 'dois', true, {chave:'valor'}];
console.log(misto)

number.push(6);
number.pop(3);
// Array - Arrays são coleções de elementos ordenados.Ajudam a organizar, processar e analisar dados.
// INDICES: 0,1,2,3,4.   usa os cochetes[].
// numero, string, misto (numero, string, boolean, objecto)
//push : Adiciona um ou mais elementos ao final de um array
//pop : Remove o último elemento de um array
//shift : Remove o primeiro elemento de um array
//unshift : Adiciona um ou mais elementos no início de um array
//map: Executa uma função de callback em cada elemento do array e retorna um novo array com os resultados.
//filter:Retorna um novo array com todos os elementos que passaram no teste implementado pela função de callback.
//forEach: Executa uma função de callback em cada elemento do array, não te retorna nada, só faz o que você ta 
// pedindo.

const objeto = {
    nome: "John",
    idade: 30,
    cidade: "Rio de Janeiro",
    pets: ["cachorro", "gato"],
    feliz: true,
    carros:{
        camaro: {
            placa: "123456",
            cor: "azul",
        },
        uno:{
            placa:"78910",
            cor: "vermelho",
        }
    },

}


console.log(objeto);
console.log(objeto.idade);
//OBJECT - Objetos são coleções de pares chave-valor. Eles são altamente utilizados em Node.js para armazenar e
// acessar dados. É uma coleção de propriedades, onde cada propriedade é um par chave-valor. Pode ter objetos, 
//dentro dos objetos. Array dentro de objetos. função dentro do objetos. Usa as chaves {}.
//os objetos são estruturas de dados que agrupam valores e funções.




// SET Sets são coleções de valores únicos.
//Podem ser de numeros, strings.  Não funciona com objetos.
//São semelhantes a arrays, mas não permitem elementos duplicados.
//São úteis para remover itens duplicados de arrays.
//São úteis para garantir que um JSON não tenha campos duplicados.
//Podem ser inicializados com o método new Set().
//Podem ter elementos adicionados com o método add().
//Podem ter elementos excluídos com o método delete().
//Podem ter o tamanho consultado com a propriedade size.
const numbers = new Set([1, 5, 10, 22, 5, 7, 10, 8]);
numbers.add(3);
numbers.add(2);
numbers.delete(5);
numbers.clear(); // é limpado todo set
console.log(numbers.has(22)); // true
console.log(numbers);
console.log(numbers.size); // conta quantos itens tem

// MAP são coleções de pares chave-valor onde as chaves podem ser de qualquer tipo.
//São semelhantes a objetos, mas permitem chaves de qualquer tipo
//São úteis em sistemas de cache e em mapeamento de dados
//Podem ser inicializados com o método new Map()
//Podem ter pares chave-valor adicionados com o método set()
//Podem ter valores consultados por chave com o método get()
//Podem ter itens excluídos com o método delete()
//Podem ter o tamanho consultado com a propriedade size


// Definindo a classe User primeiro
class User {
    constructor(name, age, coins) {
        this.name = name;
        this.age = age;
        this.coins = coins;
    }
}
const users = {
    Daniel: {
        age:12,
        coins:100,
    },
    Bruno: {
        age: 10,
        coins: 0,
    },
    Gabriel: {
        age:17,
        coins: -30,
    },
}
users["matheus"] = {age:18 , coins: 20,}
console.log(users);


// Criando um mapa para armazenar os usuários
const userMap = new Map([
    ["Daniela", new User("Daniela", 8, 50)],
    ["Bruna", new User("Bruna", 9, 40)],
    ["Gabriela", new User("Gabriela", 7, 30)],
    ["Nathalia", new User("Nathalia", 10, 100)],
]);

// Removendo um usuário do mapa
userMap.delete("Nathalia");

console.log(userMap);



// LISTAS LIGADAS
//Uma lista ligada é composta por nós, onde cada nó contém dados e uma referência (ou “link”) para o próximo nó 
// da sequência.
//Listas encadeadas são estruturas de dados feitas por grupos de nós que juntas representam uma sequência.
//Get - Operador que retorna os nós da lista encadeada
//Insert - Operador que insere elementos na lista
//Remove - Operador que remove elementos da lista com base no índice

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
}

const list = new LinkedList();
list.add(1);
list.add(2);
console.log(list);

// STACK (PILHA) -é uma estrutura de dados usada para coletar elementos e permitir o acesso somente a um item da 
// coleção armazenada. O último item é o primeiro a sair da pilha.
// isEmpty - Operação que verifica se uma pilha está vazia.
// isFull - Operação que verifica se uma pilha está cheia.
// Push - Operação que inclui elementos na pilha.
//Pop - Operação que exclui elementos da pilha
//Peek - Operação que lê o valor armazenado no topo da pilha

const vetor = []
vetor.push(1)
vetor.push(2)

console.log(vetor);
console.log(vetor.pop());


// QUEUE(Fila) - Estrutura de dados que utiliza o método FIFO ( First In, First Out ). 
// O primeiro item é o primeiro a sair da fila.
//Enqueue - Operador para incluir elementos na fila.
//Dequeue - Operador para excluir elementos do fila.
//Peek - Operação que lê o valor armazenado no topo da fila.

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        return this.items.shift();
    }

    front() {
        return this.items[0];
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue()); // 1


//ARVORES A árvore é uma estrutura não linear, ou seja, é uma coleção de nós conectados por arestas. Os nós de 
// menor valor ficam do lado esquerdo e os de maior valor ficam no lado direito.
//Insercao(data) - Crie um novo nó na árvore com o valor especificado.
//InserirNo(no, novoNo) - Verifique em qual parte da árvore o nó deve ser inserido.
// Remover(data)/RemoverNo(no, key) - Remover nós da árvore.
//EncontrarMenorNo() - Encontra o nó com o menor valor na árvore.
// EncontrarNoRaiz() - Encontra o nó raiz da árvore.
//EmOrdem(no) - Percorrer a árvore a partir de um nó.
//PreOrdem(no) - Percorre primeiro o nó raiz e vai para o lado esquerdo e depois para o lado direito.
//PosOrdem(no) - Percorre o lado esquerdo, depois vai para o lado direito e por último vai até o nó raiz.
//Pesquisar(no, data) - Pesquise o nó com dados que têm valor em toda a árvore.

class ARVORE {
    constructor(data) {
        this.data = data;
        this.left = null; // Filho à esquerda
        this.right = null; // Filho à direita
    }
}


// ARVORE BINÁRIA
class BinaryTree {
    constructor() {
        this.root = null; // Raiz da árvore
    }

    // Método para adicionar um nó à árvore
    add(data) {
        const newNode = new Node(data);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this._addNode(this.root, newNode);
        }
    }

    _addNode(currentNode, newNode) {
        if (newNode.data < currentNode.data) {
            if (currentNode.left === null) {
                currentNode.left = newNode;
            } else {
                this._addNode(currentNode.left, newNode);
            }
        } else {
            if (currentNode.right === null) {
                currentNode.right = newNode;
            } else {
                this._addNode(currentNode.right, newNode);
            }
        }
    }
}

