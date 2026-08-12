const entrada = require("redline-sync")

console.log("---SISTEMA DE ANALISE DE CREDITO");

// coleta de dados
const nome = entrada.question("Nome do cliente: ");
const idade = entrada.questionInt("idade: ");
const renda = entrada.questionFloat("Renda Mensal: ");
const temImovel = entrada.keyInYNStrict("Possui imovel proprio? ") //essa funcao le y para truee n para false

// a logica combinada
// (idade >=18) é obrigatorio
// (renda >= 2500 || temImovel === true) um dos dois tem que ser verdade
if (idade >=18 && (renda >= 2500 || temImovel === true)){
    console.log(`\nparabens, ${nome}. Seu credito foi aprovado.`);
}else{
    console.log(`\nSinto muito, ${nome}. Seu credito foi negado.`);
}