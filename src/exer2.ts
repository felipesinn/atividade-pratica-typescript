interface NotaPonderada {
  nota: number;
  peso: number;
}
interface NotaPonderada {
  nota: number;
  peso: number;
}

function calcularMediaPonderada(notas: NotaPonderada[]): number | string {
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

  const mediaPonderada: number = somaPesos !== 0 ? somaNotas / somaPesos : 0;

  return mediaPonderada;
}

const listaDeNotas: NotaPonderada[] = [
  { nota: 8, peso: 2 },
  { nota: 7, peso: 3 },
  { nota: 6, peso: 1 }
];

const resultadoMediaPonderada: number | string = calcularMediaPonderada(listaDeNotas);

if (typeof resultadoMediaPonderada === "number") {
  console.log("Média ponderada:", resultadoMediaPonderada);
} else {
  console.log(resultadoMediaPonderada);
}

// 2. Crie uma função que receba uma lista de objetos contendo nota e
// peso, realize a média das notas considerando o peso. Exemplos:
// Lista com 2 notas: (N1*P1) + (N2*P2) / 2 = Resultado
// Lista com 3 notas: (N1*P1) + (N2*P2) + (N3*P3) / 3 = Resultado