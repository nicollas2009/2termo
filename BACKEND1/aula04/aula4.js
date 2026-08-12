// const entrada = require("readline-sync")

// console.log("---SISTEMA DE ANALISE DE CREDITO");

// // coleta de dados
// const nome = entrada.question("Nome do cliente: ");
// const idade = entrada.questionInt("idade: ");
// const renda = entrada.questionFloat("Renda Mensal: ");
// const temImovel = entrada.keyInYNStrict("Possui imovel proprio? ") //essa funcao le y para truee n para false

// // a logica combinada
// // (idade >=18) é obrigatorio
// // (renda >= 2500 || temImovel === true) um dos dois tem que ser verdade
// if (idade >=18 && (renda >= 2500 || temImovel === true)){
//     console.log(`\nparabens, ${nome}. Seu credito foi aprovado.`);
// }else{
//     console.log(`\nSinto muito, ${nome}. Seu credito foi negado.`);
// }

// exemplo 2
// const entrada = require('readline-sync');

// const nome = entrada.question("Nome do aluno: ");
// const n1 = entrada.questionFloat("Nota 1: ");
// const n2 = entrada.questionFloat("Nota 2: ");

// const media = (n1 + n2) / 2;

// console.log(`\nMedia final de ${nome}: ${media.toFixed(1)}`);

// if (media >= 7) {
//     console.log("situacao: aprovado!");
// } else if (media >= 5 && media < 7) {
//    console.log("SITUACAO: RECUPERACAO");
// } else {
//     console.log("SITUACAO: REPROVADO");
// }


// 1 atividade

const imput = require('readline-sync');

const velocidade = entrada.question("Limite de velocidade: ");

if (velocidade <=80 )
   console.log("Continue viagem")
else (velocidade >80 )
     console.log("passou do limite de viagen")
 