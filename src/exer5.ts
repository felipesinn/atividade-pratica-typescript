class User {
  nome: string;
  idade: number;
  ocupacao: string;
  salario: string | number;

  constructor(nome: string, idade: number, ocupacao: string, salario: string | number = "N/A") {
    this.nome = nome;
    this.idade = idade;
    this.ocupacao = ocupacao;
    this.salario = salario;
  }

  mostrarInformacoes() {
    console.log(`${this.nome}, ${this.idade} anos, ${this.ocupacao}, salário ${this.salario}`);
  }
}

// 5. Crie um programa para mostrar informações de usuários (User) de
// uma empresa. Crie o tipo User com as seguintes propriedades:
// nome, idade, ocupação e salário (opcional). Caso o salário do
// usuário não seja informado, mostre o valor “N/A”. Exemplo:
// a. “Daphne, 23 anos, analista de TI, salário R$ 1000”
// b. “Daphne, 23 anos, analista de TI, salário N/A”