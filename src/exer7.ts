
class User {
    constructor(nome, idade, ocupacao, salario = "N/A") {
      this.nome = nome;
      this.idade = idade;
      this.ocupacao = ocupacao;
      this.salario = salario;
    }
  
    mostrarInformacoes() {
      console.log(`${this.nome}, ${this.idade} anos, ${this.ocupacao}, salário ${this.salario}`);
    }
  }
  
  class Diretor extends User {
    constructor(nome, idade, nivelComissionamento, salario = "N/A") {
      super(nome, idade, "Diretor", salario);
      this.nivelComissionamento = nivelComissionamento;
    }
  
    mostrarInformacoes() {
      console.log(`Diretor(a) ${super.mostrarInformacoes()}, comissão nível ${this.nivelComissionamento}`);
    }
  }

  type UserOuDiretor = User & Diretor;
  

  function imprimirInformacoes(item: UserOuDiretor) {
    if (item instanceof Diretor) {
      item.mostrarInformacoes();
    } else {
      item.mostrarInformacoes();
    }
  }
  

  const usuario: UserOuDiretor = new Diretor("Daphne", 23, 5, "R$ 1000");
  const usuario2: UserOuDiretor = new User("Lucas", 30, "Engenheiro");
  
  imprimirInformacoes(usuario);
  imprimirInformacoes(usuario2);
  

// 7. Crie um tipo que seja composto por um User OU por um Diretor
// usando interseção de tipos. Desenvolva uma função que receba
// uma lista desse novo tipo e, para cada item da lista, imprima:
// a. O mesmo que o exercício 5, em caso de objeto User.
// b. O mesmo que o exercício 6, em caso de objeto Diretor.