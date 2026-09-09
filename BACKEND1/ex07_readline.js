const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número: ', (entrada) => {
  const numero = Number(entrada);
  console.log('Você digitou:', numero);
  rl.close();
});
