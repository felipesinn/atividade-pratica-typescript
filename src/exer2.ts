function calcularMediaPonderada(notas) {
  if (notas.length === 0) {
    return "Lista de notas vazia.";
  }

  const { somaNotas, somaPesos } = notas.reduce(
    (acumulador, nota) => ({
      somaNotas: acumulador.somaNotas + nota.nota * nota.peso,
      somaPesos: acumulador.somaPesos + nota.peso
    }),
    { somaNotas: 0, somaPesos: 0 }
  );

  const mediaPonderada = somaNotas / somaPesos;

  return mediaPonderada;
}

const listaDeNotas = [
  { nota: 8, peso: 2 },
  { nota: 7, peso: 3 },
  { nota: 6, peso: 1 }
];

const resultadoMediaPonderada = calcularMediaPonderada(listaDeNotas);
console.log("Média ponderada:", resultadoMediaPonderada);

// 2. Crie uma função que receba uma lista de objetos contendo nota e
// peso, realize a média das notas considerando o peso. Exemplos:
// Lista com 2 notas: (N1*P1) + (N2*P2) / 2 = Resultado
// Lista com 3 notas: (N1*P1) + (N2*P2) + (N3*P3) / 3 = Resultado