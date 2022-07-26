const db = require('../database/models/index');
const { Cadastro } = require('../database/models/index');

const create = async function(cadastro) {
    const cadastroCriado = await Cadastro.create(cadastro);
    return cadastroCriado;
}

const atualizar = async function(cadastro, id){
    await Cadastro.update(cadastro, {
        where: {id: id}
    });
}

const encontrarTodos = async function() {
    const cadastros = await Cadastro.findAll();
    return cadastros;
}

const encontrarPorId = async function(id) {
    const cadastros = await Cadastro.findByPk(id);
    return cadastros;
}

const encontrarUmPorWhere = async function(where) {
    const cadastro = await Cadastro.findOne({
        where: where
    });
    return cadastro;
};


const deletar = async function(id){
    return  await Cadastro.destroy({ where: {id: id} })
}

module.exports = {
    create: create,
    atualizar: atualizar,
    encontrarTodos: encontrarTodos,
    encontrarPorId: encontrarPorId,
    encontrarUmPorWhere: encontrarUmPorWhere,
    deletar: deletar,
}