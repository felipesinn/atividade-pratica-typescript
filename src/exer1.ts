function calcularMedia(nota1: number, nota2: number): { media:number; aprovado: boolean} {
  const media = (nota1 + nota2) /2 ;
  const aprovado: boolean = media >= 6;

  return {
    media: media,
    aprovado: aprovado
  };
}

const resut = calcularMedia (7,6);

console.log(resut)
// 1. Crie uma função que receba 2 números e retorne um objeto
// contendo a média e também um indicador booleano de
// aprovado/reprovado. Considere aprovado com média >= 6.