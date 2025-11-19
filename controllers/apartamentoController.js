const { listarDisponiveis } = require('../service/apartamentoService');

function listar(req, res) {
  const resultado = listarDisponiveis();
  if (resultado.erro) {
    return res.status(404).json({ erro: resultado.erro });
  }
  return res.status(200).json(resultado);
}

module.exports = { listar };