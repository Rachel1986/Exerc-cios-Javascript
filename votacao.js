/*No sistema político atual, temos algumas regras para participar das eleições. A principal
delas, é que o voto é obrigatório a partir dos 18 anos, e opcional quando idade for igual a
16!
Diante desse cenário, escreva um código que de acordo com a variável idade informe ao
usuário usando console.log(), “Você é obrigado a votar” caso ele cumpra o requisito ou
“Seu voto é opcional”.*/
var idade = 5

if(idade >= 18){
  console.log("Você é obrigado a votar")
} else if(idade >= 16 && idade < 18){
  console.log("Seu voto é opcional")
}

