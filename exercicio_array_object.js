

function aloMundo(registro) {
    console.log('Olá', registro.nome, ' você tem ', registro.idade, 'anos e você é ', registro.eHomem ? 'homem' : 'mulher')
}

// Objeto
const robson = {
    nome: 'Robson', // string
    idade: 51, // number
    eHomem: true // boolean
}

// Objeto
const raquel = {
    nome: 'Raquel',
    idade: 23,
    eHomem: false
}

// aloMundo(robson)
// aloMundo(raquel)

// Objeto
const cristiano = {
    nome: 'Cristiano',
    idade: 34,
    eHomem: true,
    corPele: 'Branca'
}

// aloMundo(cristiano)


/******
 * Arrays - Listas
 */

const pessoas = [robson, raquel, cristiano]

console.log('Executando cada um dos objetos')
for (let i = 0; i < pessoas.length; i++) {
    aloMundo(pessoas[i])
}

console.log("Buscando os itens do sexo masculino")
const homens = pessoas.filter(pessoa => pessoa.eHomem === true)
for (let i = 0; i < homens.length; i++) {
    aloMundo(homens[i])
}

console.log("Buscando os itens do sexo feminino")
const mulheres = pessoas.filter(pessoa => pessoa.eHomem === false)
for (let i = 0; i < mulheres.length; i++) {
    aloMundo(mulheres[i])
}

console.log("Buscando os itens do sexo feminino que a idade seja maior que 30")
const mulheresMaiorQue30 = pessoas.filter(pessoa => pessoa.eHomem === false && pessoa.idade > 30)
for (let i = 0; i < mulheresMaiorQue30.length; i++) {
    aloMundo(mulheresMaiorQue30[i])
}




const name1 = ["Luana", "Pedro", "Lucas" , "Juliana", "Maria", "Gabriel"];
const age = [11, 12, 12, 11, 12, 11];
const class1 = [601, 602, 601, 601, 602, 602 ];
const isboy = [false, true, true, false, false, true];

const people = name1.map((name, index) => ({
    name: name,
    age: age[index],
    class1: class1[index],
    isboy: isboy[index]
}));

const women = people.filter(person => person.isboy === false);

women.forEach(person => console.log(person));