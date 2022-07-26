const { body, param } = require('express-validator');
const { valiodatorMessage } = require('../utils/errorMessage');

const create = function () {
    return[
        body('name', valiodatorMessage('Name')).exists().bail().isString(),
        body('healthInsuranceCardId', valiodatorMessage('HealthInsuranceCardId')).exists().bail().isString(),
        body('address', valiodatorMessage('Address')).exists().bail().isString(),
    ]
}

const atualizar = function () {
    return[
        body('name', valiodatorMessage('Name')).exists().bail().isString(),
        body('healthInsuranceCardId', valiodatorMessage('HealthInsuranceCardId')).exists().bail().isString(),
        body('address', valiodatorMessage('Address')).exists().bail().isString(),
        param('id', valiodatorMessage('Id')).exists().bail().isInt(),
       
    ]
}

const encontrarPorId = function() {
    return [
        param('id', valiodatorMessage('Id')).exists().bail().isInt(),
       
    ]
}

const deletar = function() {
    return [
        param('id', valiodatorMessage('Id')).exists().bail().isInt(),
       
    ]
}

module.exports = {
    create: create,
    atualizar: atualizar,
    encontrarPorId: encontrarPorId,
    deletar: deletar
};