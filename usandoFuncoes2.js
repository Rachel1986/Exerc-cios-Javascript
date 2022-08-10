/*Uma rede de cinemas quer implementar um sistema para controlar a entrada nas suas
salas. Os clientes, antes de entrar na sala, devem apresentar o RG em uma câmera. A
câmera seria capaz de ler a data de nascimento do cliente e, caso ele não tenha idade
suficiente para assistir a sessão, o acesso dele não seria autorizado.
Um dos programadores já fez uma função que calcula a idade com base na data de
nascimento. Ela recebe como parâmetro uma data de nascimento no formato
dd/mm/aaaa (dia com dois dígitos, mês com dois dígitos e ano com quatro dígitos) e
retorna idade da pessoa hoje. Precisamos agora que você escreva a função
deixaEntrar(dataDeNascimento, censura). A função deve receber dois parâmetros:
● O primeiro deve representar a data de nascimento do cliente no formato
dd/mm/aaaa
● O segundo deve representar a censura da sessão, ou seja, a idade mínima do
cliente para que ele possa acessar a sala.
A função deve retornar true caso o cliente tenha idade maior ou igual a censura e false
caso contrário.
*/
let data = new Date();
let ano = data.getFullYear();
let horas = data.getHours();
let mes = data.getMonth();

function deixaEntrar(dataDeNascimento, censura) {

  let cliente = ano - dataDeNascimento
  console.log(cliente)
  if (cliente >= censura) {
    console.log(`${cliente} anos, pode entrar`)
    return cliente
  } else {
    console.log(`${cliente} anos, não pode entrar`)
    return cliente
  }
}


function ingresso_idoso(x, y) {

  let vip = deixaEntrar(x, y)
  if (vip > 60) {
    console.log('ele nao paga')
  } else {
    console.log('ele paga')
  }

}

ingresso_idoso(2004, 16)

