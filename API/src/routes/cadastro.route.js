const express = require('express');
const router = express.Router();
const cadastroController = require('../controllers/cadastro.controller');
const cadastroValidator = require('../validators/cadastro.validator');

router.post('/', cadastroValidator.create(), cadastroController.create)

router.get('/', cadastroController.encontrarTodos)

router.get('/:id',  cadastroValidator.encontrarPorId(), cadastroController.encontrarPorId)

router.put('/:id', cadastroValidator.atualizar(), cadastroController.atualizar)

router.delete('/:id',  cadastroValidator.deletar(), cadastroController.deletar)

module.exports = router;