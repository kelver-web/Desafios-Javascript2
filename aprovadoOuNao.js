/*

[ ] Crie 5 objetos nesse formato{ nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo ,a pessoa deve ser maior de idade e brasileira para ser aprovada.

*/

const pessoas = [{
    nome: 'Maria',
    idade: 41,
    sexo: 'F',
    profissao: 'Desenvolvedora',
    nacionalidade: 'Americana',
},
{
    nome: 'João',
    idade: 21,
    sexo: 'M',
    profissao: 'Desenvolvedor',
    nacionalidade: 'Brasileiro(a)'
},
{
    nome: 'Ricardo',
    idade: 17,
    sexo: 'M',
    profissao: 'Mecânico',
    nacionalidade: 'Brasileiro(a)'
},
{
    nome: 'Cintia',
    idade: 35,
    sexo: 'F',
    profissao: 'Dona de casa',
    nacionalidade: 'Brasileiro(a)'
},
{
    nome: 'Tonhão',
    idade: 16,
    sexo: 'M',
    profissao: 'Cortador de Cana',
    nacionalidade: 'Brasileiro(a)'
}
]


for(let pessoa in pessoas){
    if((pessoas[pessoa].idade >= 18) && (pessoas[pessoa].nacionalidade === 'Brasileiro(a)')){
        console.log(`Foram aprovados ${pessoas[pessoa].nome}`)
    }
    else{
        console.log(`Não aprovados ${pessoas[pessoa].nome}`)
    }
}