const valiodatorMessage = function(atributo){
    return `A propriedade '${atributo}' é invalido`;
}

const notExists = function(atributo){
    return `${atributo} não existe`;
}

module.exports = {
    valiodatorMessage:  valiodatorMessage,
    notExists:  notExists
}