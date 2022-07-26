const cadastroRepository = require('../repositories/cadastro.repository');
const createError = require('http-errors');
require('dotenv').config();
const bcrypt =  require('bcrypt')

const create = async function(cadastro){
    const existeCadastrado  = await cadastroRepository.encontrarUmPorWhere({ healthInsuranceCardId: cadastro.healthInsuranceCardId});
   
    if (existeCadastrado){
        return createError(409, 'IdCard já existente');
    }


    //cadastro.healthInsuranceCardId = await bcrypt.hash(cadastro.healthInsuranceCardId, ~~process.env.SALT)
    cadastro.address = await bcrypt.hash(cadastro.address, ~~process.env.SALT)
    const cadastroCriado = await cadastroRepository.create(cadastro);
    return cadastroCriado;
}

const atualizar = async function(cadastro, id) {
    const  existeCadastrado = await cadastroRepository.encontrarPorId(id);

    if (!existeCadastrado) {
        return createError(404, "Cadastro não encontrado" );
    }

    await cadastroRepository.atualizar(cadastro, id);

    return await cadastroRepository.encontrarPorId(id)
}


const encontrarTodos = async function(){
    const cadastros = await cadastroRepository.encontrarTodos();
    return cadastros;
}

const encontrarPorId = async function(id){
    const cadastro = await cadastroRepository.encontrarPorId(id);
   
    if (!cadastro) {
        return createError(404, 'Usuário não encontrado');
    }
   
    return cadastro;
}

const deletar = async function(id){
    const cadastro = await cadastroRepository.encontrarPorId(id);
   
    if (!cadastro) {
        return createError(404, 'Usuário não encontrado');
    }

    await cadastroRepository.deletar(id);
    return cadastro;
}



module.exports = {
    create: create,
    atualizar: atualizar,
    encontrarTodos: encontrarTodos,
    encontrarPorId: encontrarPorId,
    deletar: deletar,
}