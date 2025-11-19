const Proprietario = require('../model/proprietario');
const proprietarios = [];
let idCounter = 1;

function validarSenha(senha) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(senha);
}

function emailUnico(email) {
  return !proprietarios.some(p => p.email === email);
}

function cadastrarProprietario({ nome, email, senha }) {
  if (!nome || !email || !senha) {
    return { erro: 'Todos os campos obrigatórios devem ser preenchidos.' };
  }
  if (!emailUnico(email)) {
    return { erro: 'E-mail já cadastrado.' };
  }
  if (!validarSenha(senha)) {
    return { erro: 'Senha inválida. Deve ter mínimo de 8 caracteres, uma maiúscula, uma minúscula e um número.' };
  }
  const novo = new Proprietario({ id: idCounter++, nome, email, senha });
  proprietarios.push(novo);
  return { sucesso: true, proprietario: { id: novo.id, nome: novo.nome, email: novo.email } };
}

function buscarPorEmail(email) {
  return proprietarios.find(p => p.email === email);
}

module.exports = { cadastrarProprietario, buscarPorEmail, proprietarios };