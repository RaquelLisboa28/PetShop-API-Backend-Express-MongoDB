/*
Baseado em registros que tenham a seguinte estrutura faça o que se pede (colocar a resposta entre os enunciados das questões):

{
    id: number
    name: string
    gender: string
    age: number
    address: string
    state: string
}
*/

const { filter } = require("minimatch");

// 1) Crie uma lista para armazenar registros na estrutura acima:
const registration = [];

// 2) Adicione 15 registros à lista:
registration.push({ id:1 , name:"Jane",gender: "F", age:40, adress: " Rua Um, 101", state:"SP",});
registration.push({ id:2 , name:"Elson",gender: "M", age:44, adress: "Rua Dois, 102", state:"RJ",});
registration.push({ id:3 , name:"Thayane",gender: "F", age:27, adress: "Rua Três, 103", state:"SC",});
registration.push({ id:4 , name:"Eduardo",gender: "M", age:50, adress: "Rua Quatro, 104", state:"PR",});
registration.push({ id:5 , name:"Felipe",gender: "M", age:28, adress: "Rua Cinco, 105", state:"RS",});
registration.push({ id:6 , name:"Brenda",gender: "F", age:24, adress: "Rua Seis, 106", state:"SP",});
registration.push({ id:7 , name:"Elisa",gender: "F", age:14, adress: "Rua Sete, 107", state:"RJ",});
registration.push({ id:8 , name:"Kathelen",gender: "F", age:16, adress: "Rua Oito, 108", state:"SC",});
registration.push({ id:9 , name:"Lucas",gender: "M", age:35, adress: "Rua Nove, 109", state:"PR",});
registration.push({ id:10 , name:"Davi",gender: "M", age:29, adress: "Rua Dez, 110", state:"RS",});
registration.push({ id:11 , name:"Jonathan",gender: "M", age:11, adress: "Rua Onze, 111", state:"SP",});
registration.push({ id:12 , name:"Alessandro",gender: "M", age:49, adress: "Rua Doze, 112", state:"RJ",});
registration.push({ id:13 , name:"Cleice",gender: "F", age:15, adress: "Rua Treze, 113", state:"SC",});
registration.push({ id:14 , name:"Yasmin",gender: "F", age:25, adress: "Rua Quartoze, 104", state:"PR",});
registration.push({ id:15 , name:"Sara",gender: "F", age:17, adress: "Rua Quinze, 115", state:"RS",});

//console.log(registration)

// 3) Remova o registro de id 3:
registration.splice(2, 1);
//console.log(registration);

// 4) Atualize o registro de id 2 mudando o nome para "João":
registration[1].name ="João";
//console.log(registration);

// 5) Retorne a quantidade de registros na lista:
const totalRegistration = registration.length;
//console.log(totalRegistration);

// 6) Retorne a média de idade dos registros:

const totalAge = registration.reduce((sum, person) => sum + person.age, 0);
const averageAge = totalAge / totalRegistration;

//console.log(averageAge); 

// 7) Retorne a quantidade de registros com gênero masculino:

const genderMale = registration
    .filter(registration => registration.gender === "M")
    .reduce((acumulador, genderMale) => acumulador + 1, 0);

//console.log(genderMale);


// 8) Retorne a quantidade de registros com gênero feminino:
const genderFemale = registration
    .filter(registration => registration.gender === "F")
    .reduce((acumulador, genderFemale) => acumulador + 1, 0);

//console.log(genderFemale); 


// 9) Retorne a quantidade de registros com idade maior que 18:
//filter + reduce
const olderAge = registration
    .filter(registration => registration.age >= 18)
    .reduce((acumulador, olderAge) => acumulador + 1, 0);

//console.log(olderAge);

// 10) Retorne a quantidade de registros com idade menor que 18:
const youngerAge = registration
    .filter(registration => registration.age <= 18)
    .reduce((acumulador, youngerAge) => acumulador + 1, 0);

//console.log(youngerAge); 

// 11) Retorne a quantidade de registros com estado "SC":
const amountSC = registration
    .filter(registration => registration.state === "SC")
    .reduce((acumulador, amountSC) => acumulador + 1, 0);

//console.log(amountSC);   

// 12) Retorne a quantidade de registros com estado "RS":
const amountRS = registration
    .filter(registration => registration.state === "RS")
    .reduce((acumulador, amountRS) => acumulador + 1, 0);

//console.log(amountRS);    

// 13) Retorne a quantidade de registros com estado "PR":
const amountPR = registration
    .filter(registration => registration.state === "PR")
    .reduce((acumulador, amountPR) => acumulador + 1, 0);

//console.log(amountPR);    

// 14) Retorne a quantidade de registros que tenham o estado diferente de "SP":
const differentSP = registration
    .filter(registration => registration.state !== "SP")
    .reduce((acumulador, differentSP) => acumulador + 1, 0);

//console.log(differentSP);    
// 15) Retorne a quantidade de registros que tenham o estado diferente de "RJ" e diferente de "SP":
const differentRJ = registration
    .filter(registration => registration.state !== "RJ" && registration.state !== "SP") 
    .length;

console.log(differentRJ);


// 16) Retorne true ou false se existe algum registro com idade menor que 18:
//some
const ageOlder = registration.some(function(registration) {
    return registration.age < 18;
});

console.log(ageOlder); 


// 17) Retorne true ou false se todos os registros são do estado "SP":
//every
const allFromSP = registration.every(function(registration) {
    return registration.state === "SP";
});

console.log(allFromSP); 


// 18) Retorne os registros ordenados por idade. Se tiver idade igual, ordene esses por nome:
const order = registration
 .filter(registration => registration.age )
 order.sort((a,b) => a.age - b.age);

 //console.log(order);
 

// 19) Procure o primeiro estado com a sigla "SC" e retorne o registro:
//usar find
 const firstSC = registration.find( registration => registration.state === "SC")

//console.log(firstSC);

// 20) Limpe a lista de registros:

const registration = [];