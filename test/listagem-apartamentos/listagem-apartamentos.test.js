require('dotenv').config();
const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;
const baseURL = process.env.BASE_URL;
const listagemData = require('../fixtures/listagem-apartamentos.json');
let validToken = '';

before(async function () {
  // Obter token válido antes dos testes
  const res = await request(baseURL)
    .post('/api/login')
    .send({ email: 'bruna.kalles@example.com', senha: 'Senha123' });
  if (res.status === 200 && res.body.token) {
    validToken = res.body.token;
  }
});

describe('Listagem de Apartamentos API', function () {
  listagemData.forEach((data, idx) => {
    it(`Listagem test case #${idx + 1}`, async function () {
      let token = data.token;
      if (token === '<valid_token>') token = validToken;
      const res = await request(baseURL)
        .get('/api/apartamentos')
        .set('Authorization', `Bearer ${token}`);
      if (!token || token === '<invalid_token>') {
        expect(res.status).to.equal(401);
        expect(res.body).to.have.property('erro');
      } else if (res.status === 404) {
        expect(res.body).to.have.property('erro');
      } else {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
        if (res.body.length > 0) {
          res.body.forEach(ap => {
            expect(ap).to.have.property('id');
            expect(ap).to.have.property('nome');
            expect(ap).to.have.property('descricao');
            expect(ap).to.have.property('localizacao');
            expect(ap).to.have.property('valorDiaria');
          });
        }
      }
    });
  });
});
