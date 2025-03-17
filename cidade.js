/* 1) Mostre dentro das cidades dos seguintes estados: RJ, SC, BA, PR
 2) Filtrar pelos mesmos estados acima e exibir um top 5 das cidades
 3) Mostrar quais estados (nomes) que contém as seguintes cidades: Dois Riachos, Joinville, Plano Piloto, Pancas
 4) Mostre dentro das cidades dos seguintes estados: ABC
 Se achar, exibe as cidades. Se não achar, exibir, “Estado não encontrado"
 Estudar as teclas de atalho mais utilizadas no VSCode 
*/
 

const estadosCidades = require("./estados_cidades.json")

/*function filterByState(code){
  const estado = estadosCidades.estados.find(estado => estado.sigla == code);
  if (estado != undefined){
    console.log(estado.cidades);
    console.log(estado.cidades.slice(0,5));
  } else {
    console.log("Estado não encontrado")
  }
}*/

/*function mostrarNomeDoEstado(cidade) {
  const estado = estadosCidades.estados.find(estado => {
    const cidadeEncontrada = estado.cidades.find(nomeCidade => nomeCidade == cidade )
    return cidadeEncontrada != undefined
  })
  console.log(estado.nome)
}*/

//  mostrarNomeDoEstado("Dois Riachos")
//  mostrarNomeDoEstado("Joinville")
//  mostrarNomeDoEstado("Plano Piloto")
//  mostrarNomeDoEstado("Pancas")
//  mostrarNomeDoEstado("Mendes")

//filterByState("ABC")
//SP, RS, RN, AP

function encontrarEstadosPorSigla (sigla) {
  const estadoEncontrado = estadosCidades.estados.find (estado => estado.sigla === sigla);
  return estadoEncontrado ? estadoEncontrado.cidades: "Estado não encontrado.";

}

console.log(encontrarEstadosPorSigla("SP"));
console.log(encontrarEstadosPorSigla("RS"));
console.log(encontrarEstadosPorSigla("RN"));
console.log(encontrarEstadosPorSigla("AP"));