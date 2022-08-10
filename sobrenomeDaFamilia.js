/*Temos uma lista com nomes de todos os integrantes da família mas esqueceram de
colocar o sobrenome!
Seu desafio será imprimir nome junto com o sobrenome “Macedo” para cada integrante
da família. Mas temos uma exceção, temos um integrante com sobrenome diferente, se
tiver algum “Pedro”, coloque o sobrenome “Sousa”.
*/
let nomesFamilia = ["Paula", "John", "Lúcia", "Pedro", "Marcos"];

for(let i = 0; i < nomesFamilia.length; i++){
  if(nomesFamilia[i] == "Pedro"){
    console.log(nomesFamilia[i] + " Sousa")
    continue
  } else {
    console.log(nomesFamilia[i] + " Macedo")
  }
}
