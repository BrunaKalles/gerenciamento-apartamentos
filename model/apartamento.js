class Apartamento {
  constructor({ id, nome, descricao, localizacao, valorDiaria, disponivel = true }) {
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.localizacao = localizacao;
    this.valorDiaria = valorDiaria;
    this.disponivel = disponivel;
  }
}

module.exports = Apartamento;