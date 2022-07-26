require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const handle404Error = require('./src/middlewares/handle404Error');
const app = express();
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

const itemRouter = require('./src/routes/item.route');
const cadastroRouter = require('./src/routes/cadastro.route');
const handleError = require('./src/middlewares/handleError');

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use('/api/itens', itemRouter);
app.use('/api/cadastros', cadastroRouter);
app.use(handle404Error);
app.use(handleError);
app.listen(process.env.porta, () => { console.log('Ativa') })