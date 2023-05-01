/*

Faça um programa onde os jurados vão dar a explicação para cada nota dada. São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente.

*/
let notas = 10

switch(notas){
    case 1:
        console.log('Nota muito baixa')
        break;
    case 2:
        console.log('Nota pode subir mais')
        break
    case 3:
        console.log('Nota pode melhorar')
        break
    case 4:
        console.log('Nota está subindo')
        break
    case 5:
        console.log('Nota está melhorando')
        break
    case 6:
        console.log('Nota na média')
        break
    case 7:
        console.log('Nota boa')
        break
    case 8:
        console.log('Nota muito boa')
        break
    case 9:
        console.log('Nota ótima')
        break
    case 10:
        console.log('Nota excelente')
        break
    default:
        console.log('Você não alcançou notas')
}