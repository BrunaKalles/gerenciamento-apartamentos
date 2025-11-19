const Apartamento = require('../model/apartamento');
const apartamentos = [];
let idCounter = 1;

// Inserir apartamento disponível na base de dados em memória
apartamentos.push(new Apartamento({
  id: idCounter++,
  nome: 'Apartamento Central',
  descricao: 'Apartamento espaçoso no centro da cidade',
  localizacao: 'Centro, Cidade X',
  valorDiaria: 150.0,
  disponivel: true
}));

// Inserir apartamento indisponível na base de dados em memória
apartamentos.push(new Apartamento({
  id: idCounter++,
  nome: 'Apartamento Leste',
  descricao: 'Apartamento moderno na zona leste',
  localizacao: 'Zona Leste, Cidade X',
  valorDiaria: 120.0,
  disponivel: false
}));

// Inserir novo apartamento disponível na base de dados em memória
apartamentos.push(new Apartamento({
  id: idCounter++,
  nome: 'Apartamento Sul',
  descricao: 'Apartamento aconchegante na zona sul',
  localizacao: 'Zona Sul, Cidade X',
  valorDiaria: 180.0,
  disponivel: true
}));

function listarDisponiveis() {
  const disponiveis = apartamentos.filter(a => a.disponivel);
  if (disponiveis.length === 0) {
    return { erro: 'Nenhum apartamento disponível.' };
  }
  return disponiveis.map(({ id, nome, descricao, localizacao, valorDiaria }) => ({ id, nome, descricao, localizacao, valorDiaria }));
}

module.exports = { listarDisponiveis, apartamentos };