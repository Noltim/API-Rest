const cadastroService = require('../services/cadastro.service')
const { validationResult } = require('express-validator');
const createErrors = require('http-errors');

const create = async function (req, res, next) {
    // #swagger.tags = ['Cadastro']
    // #swagger.description = 'Endpoint para cadastrar um novo paciente.'
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            throw createErrors(422, { errors: errors.array() })
        }

        const response = await cadastroService.create(req.body);

        if (response && response.message) {
            throw response;
        }
        res.send(response);
    } catch (error) {
        return next(error);
    }

};

const atualizar = async function (req, res, next) {
    // #swagger.tags = ['Cadastro']
    // #swagger.description = 'Endpoint para atualizar o cadastro de um paciente.'
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            throw createErrors(422, { errors: errors.array() })
        }

        const response = await cadastroService.atualizar({
            name: req.body.name,
            healthInsuranceCardId: req.body.healthInsuranceCardId,
            address: req.body.address,
        }, req.params.id);

        if (response && response.message) {
            throw response;
        }

        res.send(response);
    } catch (error) {
        return next(error);
    }
}

const encontrarTodos = async function (req, res, next) {
    // #swagger.tags = ['Cadastro']
    // #swagger.description = 'Endpoint para listar todos os cadastros de pacientes.'
    try {
        const response = await cadastroService.encontrarTodos();
        res.send(response);
    } catch (error) {
        next(error);
    }

};

const encontrarPorId = async function (req, res, next) {
    // #swagger.tags = ['Cadastro']
    // #swagger.description = 'Endpoint para listar o cadastro de um paciente.'
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            throw createErrors(422, { errors: errors.array() })
        }

        const response = await cadastroService.encontrarPorId(req.params.id);

        if (response && response.message) {
            throw response;
        }

        res.send(response);
    } catch (error) {
        next(error)
    }

};

const deletar = async function (req, res, next) {
    // #swagger.tags = ['Cadastro']
    // #swagger.description = 'Endpoint para deletar o cadastro de um paciente.'
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            throw createErrors(422, { errors: errors.array() })
        }

        const response = await cadastroService.deletar(req.params.id);

        if (response && response.message) {
            throw response;
        }

        res.send(response);
    } catch (error) {
        next(error)
    }

};

module.exports = {
    create: create,
    atualizar: atualizar,
    encontrarTodos: encontrarTodos,
    encontrarPorId: encontrarPorId,
    deletar: deletar,
};