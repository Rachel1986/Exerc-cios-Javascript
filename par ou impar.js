/*Dentro do código estará criada uma variável numeroDaSorte contendo um número. Sua
missão é verificar se o valor da variável é par ou ímpar utilizando o operador relacional
módulo (%). Imprima “Par” ou “Ímpar” de acordo com o resultado.
Dica: Para verificar se um número é par, basta fazer a expressão do número dividido por
2 e verificar se o resto é igual à 0 (zero). Exemplo: (42 % 2 == 0)*/

  let numeroDaSorte = 45
  if(numeroDaSorte % 2 == 0){
    console.log("Par")
  } else {
    console.log("Impar")
  }