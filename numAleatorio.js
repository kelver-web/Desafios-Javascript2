/*

[ ] Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 'ganhador'. Então ele também irá gerar um número aleatório entre 1 e 10, e verifica se a pessoa ganhou ou não. Em caso de ter ganhado, mostra o prêmio, se não ganhou, mostra outra mensagem.

*/

let numAleatorio = parseInt(Math.random() * 10 + 1)
let ganhou = parseInt(Math.random() * 10 + 1)

if (numAleatorio == ganhou){
    console.log("Você venceu, parabéns!!!")
}else{
    console.log('Não foi dessa vez, tente novamente :( ')
}