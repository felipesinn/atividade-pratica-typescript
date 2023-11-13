interface Produto {
  id: number;
  nome: string;
  preco: number;
}

function cadastrarProduto(lista: Produto[], id: number, nome: string, preco: number): void {
  const novoProduto: Produto = { id, nome, preco };
  lista.push(novoProduto);
  console.log(`Produto "${nome}" cadastrado com sucesso.`);
}

function listarProdutos(lista: Produto[]): void {
  if (lista.length === 0) {
      console.log("A lista de produtos está vazia.");
  } else {
      console.log("Lista de Produtos:");
      lista.forEach((produto) => {
          console.log(`ID: ${produto.id}, Nome: ${produto.nome}, Preço: R$${produto.preco.toFixed(2)}`);
      });
  }
}

function excluirProduto(lista: Produto[], id: number): void {
  const indice = lista.findIndex((produto) => produto.id === id);

  if (indice !== -1) {
      const produtoRemovido = lista.splice(indice, 1)[0];
      console.log(`Produto "${produtoRemovido.nome}" removido com sucesso.`);
  } else {
      console.log(`Produto com ID ${id} não encontrado.`);
  }
}

const listaDeProdutos: Produto[] = [];

cadastrarProduto(listaDeProdutos, 1, "Camiseta", 29.99);
cadastrarProduto(listaDeProdutos, 2, "Calça Jeans", 59.99);
cadastrarProduto(listaDeProdutos, 3, "Tênis", 79.99);

listarProdutos(listaDeProdutos);

excluirProduto(listaDeProdutos, 2);

listarProdutos(listaDeProdutos);


// 4. Crie um programa para cadastrar, listar e excluir produtos de uma
// lista com tipagem de Produto.