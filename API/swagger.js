const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./src/routes/cadastro.route']


const doc = {
    info: {
        version: "1.0.0",
        title: "API",
        description: "A 'API' é uma API REST que simula recuperar, criar, atualizar e deletar dados de um paciente com intuito de servir de material de estudos de testes de API. \n Autor: *José Milton de Oliveira Neto*"
        
    },
    host: "localhost:3000",
    basePath: "/api/cadastros",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            "name": "Cadastro",
            "description": "Realizar cadastro, consultar, atualização ou deletar dados de paciente"
        }
    ],
    securityDefinitions: {
        api_key: {
            type: "apiKey",
            name: "api_key",
            in: "header"
        },
        petstore_auth: {
            type: "oauth2",
            authorizationUrl: "https://petstore.swagger.io/oauth/authorize",
            flow: "implicit",
            scopes: {
                read_pets: "read your pets",
                write_pets: "modify pets in your account"
            }
        }
    },
    definitions: {
        Cadastro: {
            name: "Matilde Fernandes Goncalves",
            healthInsuranceCardId: '123456789',
            address: 'Rua Luís de Castro, 1182'
        },
    }
}

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./index.js')
})