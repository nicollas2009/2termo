const readline = require('readline-sync');

const temperatura = Number(readline.question('Qual a temperatura (°C): '));

let situacao;

if (temperatura <= 60) {
  situacao = 'NORMAL';
} else if (temperatura <= 80) {
  situacao = 'ATENÇÃO';
} else {
  situacao = 'CRÍTICA';
}

console.log('Temperatura informada: ' + temperatura + ' °C');
console.log('Situação: ' + situacao);
