
function criarCarteira() {
    return {
      saldo: 0,
      transacoes: [],
    };
  }
  
  function lançarEntrada(carteira, valor) {
    if (valor <= 0) {
      return { sucesso: false, mensagem: "O valor de entrada deve ser maior que zero." };
    }
  
    carteira.saldo += valor;
    carteira.transacoes.push({ tipo: "entrada", valor });
    return { sucesso: true, mensagem: `Entrada de R$${valor} lançada com sucesso. Saldo atual: R$${carteira.saldo}` };
  }
  
  function lançarSaída(carteira, valor) {
    if (valor <= 0) {
      return { sucesso: false, mensagem: "O valor de saída deve ser maior que zero." };
    }
  
    if (valor > carteira.saldo) {
      return { sucesso: false, mensagem: "Saldo insuficiente para realizar a saída." };
    }
  
    carteira.saldo -= valor;
    carteira.transacoes.push({ tipo: "saída", valor });
    return { sucesso: true, mensagem: `Saída de R$${valor} lançada com sucesso. Saldo atual: R$${carteira.saldo}` };
  }
  

  const minhaCarteira = criarCarteira();
  
  console.log(lançarEntrada(minhaCarteira, 800)); 
  console.log(lançarSaída(minhaCarteira, 50));   
  console.log(lançarSaída(minhaCarteira, 80));   
  console.log(lançarEntrada(minhaCarteira, 30));   
  

//   3. Crie um programa que simule uma carteira de dinheiro. Este
// programa vai precisar ter uma carteira contendo saldo, transações
// de entrada e saídas. Ou seja, será um objeto com estas
// propriedades. Depois crie uma função para lançar uma entrada e
// uma saída. Caso ao lançar uma saída e não tiver saldo, precisa dar
// um erro ou avisar.