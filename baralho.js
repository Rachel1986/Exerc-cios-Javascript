/*Temos um array em uma variável chamada baralho e precisamos de um script que
procure a carta “Rei” entre as cartas do baralho. Assim que encontrar o “Rei” pare o loop
utilizando break e exiba um console.log a seguinte frase: Encontrei o Rei!
*/
let baralho = ["Valete", "Rei", "Dama"];
let busca = "Rei";
for (let i = 0; i < baralho.length; i++){
  if(baralho[i] == busca){
    console.log("Encontrei o Rei!")
    break
  }
}
