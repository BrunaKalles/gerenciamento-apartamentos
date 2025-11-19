const express = require('express');
const router = express.Router();
const { listar } = require('../controllers/apartamentoController');
const { autenticar } = require('../middleware/authMiddleware');

router.get('/apartamentos', autenticar, listar);

module.exports = router;