const express = require('express');
const router = express.Router();
const { registrar } = require('../controllers/proprietarioController');

router.post('/proprietarios', registrar);

module.exports = router;