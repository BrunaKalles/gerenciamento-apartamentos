
const express = require('express');
const bodyParser = require('body-parser');
const proprietarioRoutes = require('./routes/proprietarioRoutes');
const apartamentoRoutes = require('./routes/apartamentoRoutes');
const authRoutes = require('./routes/authRoutes');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./resources/swagger.json');

const app = express();
app.use(bodyParser.json());

app.use('/api', proprietarioRoutes);
app.use('/api', authRoutes);
app.use('/api', apartamentoRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
  res.send('API de Gerenciamento de Apartamentos');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
