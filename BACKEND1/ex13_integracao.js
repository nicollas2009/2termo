const alunos = [
  { nome: 'Ana', nota: 8 },
  { nome: 'Bruno', nota: 6 },
  { nome: 'Carla', nota: 9 }
];

function exibirAlunos(lista) {
  for (let i = 0; i < lista.length; i++) {
    console.log(lista[i].nome, '-', lista[i].nota);
  }
}

exibirAlunos(alunos);
