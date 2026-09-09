// Módulo de funções de análise de qualidade

function calcularMedia(notas) {
  let soma = 0;
  for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
  }
  return soma / notas.length;
}

function classificarQualidade(media) {
  if (media >= 9) {
    return "Excelente";
  } else if (media >= 7) {
    return "Boa";
  } else if (media >= 5) {
    return "Regular";
  } else {
    return "Ruim";
  }
}

function avaliarProdutos(produtos) {
  const resultados = [];
  for (let i = 0; i < produtos.length; i++) {
    const produto = produtos[i];
    const media = calcularMedia(produto.notas);
    const classificacao = classificarQualidade(media);
    resultados.push({
      nome: produto.nome,
      media: media,
      classificacao: classificacao
    });
  }
  return resultados;
}

module.exports = {
  calcularMedia,
  classificarQualidade,
  avaliarProdutos
};