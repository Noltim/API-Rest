# Sobre o Projeto

Seu início se dá pela pasta API REST, onde está contido o desenvolvimento da 'API', testes em postman arquitetados em JavaScript, provas visuais dos teste em pleno funcionamento, anotações e afins.
Foi utilizado diferentes técnicas, com o objetivo de criar a API: arquiteturas modernas, utilizar ORM para facilitar a comunicação com o banco de dados, desenvolvimento do middlewares na api, autenticação do usuário, tratamento de erros, validações de rotas, criação de migrations, deleção lógica e padrões de arquitetura, padrões de projeto e entre outras coisas utilizadas em projetos reais nos dias atuais. 


## Tecnologias e ferramentas utilizadas
- Git 
- GitHub
- Visual Studio Code
- Javascript
- Postman
- Nodejs
- mysql2
- express
- express-validator
- sequelize
- ORM
- body parser
- bcraypt
- http-errors
- dotenv
- swagger-ui-express

# Sobre o Projeto

## Prepraração para execução do projeto

- Requer o Nodejs 16.0 ou superior instalado, postman instalados na sua maquina.(Na instalação você verá onde baixar e como instalar.)
- Baixar o repositório ou cloná-lo
- Iniciar o VScode e abrir a basta API no mesmo. 
- O Arquivo esta localizado na pasta 'teste/postman'com nome 'API Paciente - Consumo.postman_collection'



## Instalação

### Postman
- Para instalação do postman deve-se seguir ao site oficial (https://www.postman.com/downloads/) e baixar a versão correspondente ao seu sistema operacional.

### Nodejs
- Para instalação do newman deve-se seguir os seguintes passos:

- Baixar o NodeJS do site oficial ( https://nodejs.org/ ). Apenas certifique-se de instalar a versão que corresponde ao seu sistema operacional. 
- Durante a configuração da instalação, confirme se o gerenciador de pacotes npm está selecionado, pois usaremos este pacote na próxima etapa.

- Verificando o sucesso da instalação
- Podemos verificar se o NodeJS e o npm foram instalados com sucesso abrindo cmd e digitando:

- node-v

- A versão do NodeJS deve aparecer.

- npm -v

- A versão Npm deve aparecer.


## Execução


### API

- Para executar a API
- abra no vscode na pasta API (( para facilidade pode usar na barra de navegação o comando ' cmd ' e depois digitar ' code . '))
- primeiro vamos renomear a pasta .env.exemplo para apenas .env e preencher os dados conforme solicitado e salvar.
- abra um terminal no Vscode e execute o comando npm install para baixar as dependências usadas no projeto
- se quiser editar a api recomendo o baixar o npm install -g nodemon e iniciar pelo comando nodemon index, mas caso não pode pular para proximo passo.
- rode o comando  para criar o banco de dados npx sequelize-cli db:migrate
- antes lembre de criar o banco de dados conforme o nome no doc .env
- para rodar a API use o comando npx run index

PS: Renomear o arquivo .envexemplo para .env e preencher os dados.

### POSTMAN

- Para conseguir visualizar melhor os endpoints abra o POSTMAN
- importe o arquivo "API Paciente - Consumo.postman_collection" em '.API REST/Teste/Postman'
- todos os testes feitos e retornos com tratamentos estão catalogados.

### MySQL

- O database foi feito com mysql logo será necessario te-lo instalado em sua maquina e inicia-lo.
- Create database api;
- use api
- select * from cadastro




# Considerações Finais

A API está funcionando e operando em ambiente local em sua versão beta.


## Autor

José Milton de Oliveira Neto
