/*

[ ] Faça um programa que verifica se uma pessoa é brasileira ou não. // DEVE SER UM OBJETO

*/

const pessoa = {
    nome: 'Cintia',
    nacionalidade: 'Holandesa',
    idade: 42,
}

if(pessoa.nacionalidade === 'Brasileira'){
    console.log(`${pessoa.nome} é Brasileira`)
}else{
    console.log(`${pessoa.nome} é ${pessoa.nacionalidade}`)
}