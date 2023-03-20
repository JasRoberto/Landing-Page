function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}
Pessoa.prototype.nomeComple = function () {
  return `${this.nome} ${this.sobrenome}`;
};

const Roberto = new Pessoa("roberto", "araujo");
console.log(Roberto.nome);
