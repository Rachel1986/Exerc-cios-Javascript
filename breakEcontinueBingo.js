/*Vamos criar um bingo, onde os números da cartela serão representados por um array
chamado cartela, e o número sorteado deve ficar em uma variável chamada
numeroSorteado. Seu trabalho será verificar se existe o número sorteado na cartela,
quando encontrar deve imprimir “Encontrei o número!” e parar o loop!
*/

let cartela = [4, 18, 27, 5, 31, 13, 86]
let numeroSorteado = 31;

for(let i = 0; i < cartela.length; i++){
  if(cartela[i] == numeroSorteado){
    console.log("Encontrei o número!");
    break
  }
  
}
