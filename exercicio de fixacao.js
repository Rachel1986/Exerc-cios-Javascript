/*Declare cinco variáveis com a nomenclatura a seguir e atribua a tais, um valor que
atenda o tipo de dado indicado:
● nome (string)
● idade (number)
● altura (float)
● possuiPet (boolean)
● filmesFavoritos (array)*/
var nome = "Rachel"
var idade = 35
var altura = 1.74
var possuiPet = true
var filmesFavoritos = ["Como perder um homem em 10 dias", "O poderoso chefão", 
"A vida é bela"]

/*Precisamos criar um código que gere cartão de visita com nome, sobrenome e profissão
dos clientes, para isso:
● Crie uma variável para guardar cada informação (cada uma deve receber um dos
3 nomes acima),
● Depois faça a concatenação das informações em uma nova variável chamada
cartaoDeVisita.
Exemplo:
nome: Taylor
sobrenome: Alvarenga
profissão: Programadora
Cartão de visita esperado: “Taylor Alvarenga - Programadora”
OBS: no desenvolvimento da variável cartaoDeVisita deixar um espaço entre caractere e
caractere de concatenação.
Dica: Atenção aos detalhes, como hífen e espaços.*/

var nome = "Rachel "
var sobrenome = "Guzman Valencio "
var profissao = "Programadora"
var cartaoDeVisita = nome + sobrenome + " - " + profissao

console.log(cartaoDeVisita)