
interface Carteira {
  saldo: number;
  transacoes: { tipo: string; valor: number }[];
}

function criarCarteira(): Carteira {
  return { saldo: 0, transacoes: [] };
}

function lancarTransacao(carteira: Carteira, valor: number, tipo: string): { sucesso: boolean; mensagem: string } {
  if (valor <= 0) {
      return { sucesso: false, mensagem: `O valor de ${tipo} deve ser maior que zero.` };
  }

  if (tipo === 'entrada') {
      carteira.saldo += valor;
  } else if (tipo === 'saida' && valor <= carteira.saldo) {
      carteira.saldo -= valor;
  } else {
      return { sucesso: false, mensagem: 'Saldo insuficiente para realizar a saída.' };
  }

  const transacao = { tipo, valor };
  carteira.transacoes.push(transacao);

  const mensagem = `${tipo.charAt(0).toUpperCase() + tipo.slice(1)} de R$${valor} lançada com sucesso. Saldo atual: R$${carteira.saldo}`;

  return { sucesso: true, mensagem };
}

const minhaCarteira: Carteira = criarCarteira();

console.log(lancarTransacao(minhaCarteira, 800, 'entrada'));
console.log(lancarTransacao(minhaCarteira, 30, 'saida'));
console.log(lancarTransacao(minhaCarteira, 80, 'saida'));
console.log(lancarTransacao(minhaCarteira, 98, 'entrada'));

//   3. Crie um programa que simule uma carteira de dinheiro. Este
// programa vai precisar ter uma carteira contendo saldo, transações
// de entrada e saídas. Ou seja, será um objeto com estas
// propriedades. Depois crie uma função para lançar uma entrada e
// uma saída. Caso ao lançar uma saída e não tiver saldo, precisa dar
// um erro ou avisar.