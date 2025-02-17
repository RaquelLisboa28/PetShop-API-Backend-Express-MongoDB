/* 1) Mostre dentro das cidades dos seguintes estados: RJ, SC, BA, PR
 2) Filtrar pelos mesmos estados acima e exibir um top 5 das cidades
 3) Mostrar quais estados (nomes) que contém as seguintes cidades: Dois Riachos, Joinville, Plano Piloto, Pancas
 4) Mostre dentro das cidades dos seguintes estados: ABC
 Se achar, exibe as cidades. Se não achar, exibir, “Estado não encontrado"
 Estudar as teclas de atalho mais utilizadas no VSCode 
*/

//1 pegar o nome de todas as cidades do estados
 

const estadosCidades = require("./estados_cidades.json")


  const cidadeRJ = estadosCidades.estados[18]
  //console.log(cidadeRJ);

  const cidadeSC = estadosCidades.estados[23]
  //console.log(cidadeSC);

  const cidadeBA = estadosCidades.estados[4]
  //console.log(cidadeBA);

  const cidadePR = estadosCidades.estados[17]
  //console.log(cidadePR);

  const osCinco = cidadeRJ.cidades.slice(0,5)
  //console.log(osCinco);

  const osCinco1 = cidadeSC.cidades.slice(0,5)
 // console.log(osCinco1);

  const osCinco2 = cidadeBA.cidades.slice(0,5)
 // console.log(osCinco2);

  const osCinco3 = cidadePR.cidades.slice(0,5)
 // console.log(osCinco3);

 const cidadeEncontrada = dados.estados.find(item => item.cidades === "Dois Riachos");
 console.log(cidadeEncontrada);

 