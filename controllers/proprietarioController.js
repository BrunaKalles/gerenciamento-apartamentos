const { cadastrarProprietario } = require('../service/proprietarioService');

function registrar(req, res) {
  const { nome, email, senha } = req.body;
  const resultado = cadastrarProprietario({ nome, email, senha });
  if (resultado.erro) {
    return res.status(400).json({ erro: resultado.erro });
  }
  return res.status(201).json(resultado.proprietario);
}

module.exports = { registrar };