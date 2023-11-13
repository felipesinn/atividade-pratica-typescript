class Diretor {
    nome: string;
    idade: number;
    nivelComissionamento: number;
    salario: string;
  
    constructor(nome: string, idade: number, nivelComissionamento: number, salario: string = "N/A") {
      this.nome = nome;
      this.idade = idade;
      this.nivelComissionamento = nivelComissionamento;
      this.salario = salario;
    }
  
    mostrarInformacoes(): void {
      console.log(`Diretor(a) ${this.nome}, ${this.idade} anos, comissão nível ${this.nivelComissionamento}, salário ${this.salario}`);
    }
  }
  
  const diretor1 = new Diretor("Daphne", 23, 5, "R$ 1000");
  const diretor2 = new Diretor("Lucas", 30, 5);
  
  diretor1.mostrarInformacoes();
  diretor2.mostrarInformacoes();
  
  
// 6. Usando o contexto do exercício 6, crie um tipo de usuário que
// representa funcionários da diretoria da empresa. O tipo Diretor deve
// conter as propriedades: nome, idade, salário (opcional) e nível de
// comissionamento (numérico). Crie uma função que receba um
// Diretor e mostre suas informações. Exemplos:
// a. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário R$ 1000”
// b. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário N/A”