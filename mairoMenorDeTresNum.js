/*

[ ] Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, qual é o menor.

*/

let num1 = 11
let num2 = 52
let num3 = 10

if((num1 > num2) && (num1 > num3)){
    console.log(`${num1} é maior que ${num2} e ${num3}`)
}else if((num2 > num1) && (num2 > num3)){
    console.log(`${num2} é maior que ${num1} e ${num3}`)
}else{
    console.log(`${num3} é maior que ${num1} e ${num2}`)
}