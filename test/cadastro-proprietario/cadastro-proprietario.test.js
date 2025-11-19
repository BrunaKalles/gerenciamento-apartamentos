require('dotenv').config();
const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;
const baseURL = process.env.BASE_URL;
const cadastroData = require('../fixtures/cadastro-proprietario.json');

describe('Cadastro de Proprietário API', function () {
  cadastroData.forEach((data, idx) => {
    it(`Cadastro test case #${idx + 1}`, async function () {
      const res = await request(baseURL)
        .post('/api/proprietarios')
        .send(data);
      if (!data.nome || !data.email || !data.senha) {
        expect(res.status).to.equal(400);
        expect(res.body).to.have.property('erro');
      } else if (data.senha.length < 8 || !/[A-Z]/.test(data.senha) || !/[a-z]/.test(data.senha) || !/[0-9]/.test(data.senha)) {
        expect(res.status).to.equal(400);
        expect(res.body).to.have.property('erro');
      } else if (idx === 3) { // e-mail duplicado
        expect(res.status).to.equal(400);
        expect(res.body).to.have.property('erro');
      } else {
        expect(res.status).to.equal(201);
        expect(res.body).to.have.property('id');
        expect(res.body).to.have.property('nome');
        expect(res.body).to.have.property('email');
      }
    });
  });
});
