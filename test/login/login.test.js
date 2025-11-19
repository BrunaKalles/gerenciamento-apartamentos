require('dotenv').config();
const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;
const baseURL = process.env.BASE_URL;
const loginData = require('../fixtures/login.json');

describe('Login API', function () {
  loginData.forEach((data, idx) => {
    it(`Login test case #${idx + 1}`, async function () {
      const res = await request(baseURL)
        .post('/api/login')
        .send({ email: data.email, senha: data.senha });
      if (data.email === 'bruna.kalles@example.com' && data.senha === 'Senha123') {
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('token');
      } else {
        expect(res.status).to.equal(401);
        expect(res.body).to.have.property('erro');
      }
    });
  });
});
