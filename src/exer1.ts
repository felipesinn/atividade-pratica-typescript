function calcularMediaAprovacao(nota1, nota2) {
    const media = (nota1 + nota2) / 2;
    const aprovado = media >= 6;
  
    return {
      media: media,
      aprovado: aprovado
    };
  }
  
  const resultado = calcularMediaAprovacao(7, 5);
  console.log(resultado);
  


// 1. Crie uma função que receba 2 números e retorne um objeto
// contendo a média e também um indicador booleano de
// aprovado/reprovado. Considere aprovado com média >= 6.