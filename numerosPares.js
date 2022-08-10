/*Precisamos imprimir somente os números pares de 0 a 20. Mas temos alguns requisitos,
você precisa utilizar, o loop for, o comando continue e o número deve ser o contador do
loop! Vamos lá?
Dica: no seu for, utilize como contador uma variável chamada i.
*/

let numerosPares =[ ]

for (let i = 0; i <= 20; i++) {
  if( i % 2 == 0){
    numerosPares += i
    continue 
 }
 
} 
console.log(numerosPares) 
  
