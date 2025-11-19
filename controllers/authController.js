const jwt = require('jsonwebtoken');
const { buscarPorEmail } = require('../service/proprietarioService');

const SECRET = 'segredo_super_secreto';

function login(req, res) {
  const { email, senha } = req.body;
  const proprietario = buscarPorEmail(email);
  if (!proprietario || proprietario.senha !== senha) {
    return res.status(401).json({ erro: 'E-mail ou senha inválidos.' });
  }
  const token = jwt.sign({ id: proprietario.id, email: proprietario.email }, SECRET, { expiresIn: '1h' });
  return res.status(200).json({ token });
}

module.exports = { login, SECRET };