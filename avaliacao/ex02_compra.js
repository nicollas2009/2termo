const readline = require('readline-sync');

const nomeMaterial = readline.question('Nome do material: ');
const quantidade = Number(readline.question('Quantidade comprada: '));
const precoUnitario = Number(readline.question('Preco unitario: '));

const valorTotal = quantidade * precoUnitario;

console.log('\nResumo da compra:');
console.log(`Material: ${nomeMaterial}`);
console.log(`Quantidade: ${quantidade}`);
console.log(`preco unitario: ${precoUnitario}`);
console.log(`Valor total: ${valorTotal}`);

