# Projeto CRUD de Serviços de Salão

Este projeto implementa uma API RESTful para gerenciar serviços de um salão de beleza utilizando Node.js, TypeScript, Express, TypeORM e MySQL.


## Pré-requisitos

*   Node.js instalado e configurado.
*   MySQL instalado e rodando.
*   Um banco de dados chamado `mydb` criado no MySQL.  Use o comando `CREATE DATABASE mydb;` no seu cliente MySQL.

## Instalação

1.  Clone o repositório: `git clone <link_do_repositorio>`
2.  Navegue até o diretório do projeto: `cd <diretório_do_projeto>`
3.  Instale as dependências:

```bash
npm install
```

4.  Compile o código TypeScript:

```bash
npm run build
```
ou (para desenvolvimento) :
```bash
npm run dev
```

## Conexão com o Banco de Dados

Configure as credenciais de conexão com o banco de dados no arquivo `db.config.ts`.  As configurações padrão são:

```
HOST: "localhost"
PORT: 3306
USER: "root"
PASSWORD: "root"
DB: "mydb"
```

Certifique-se de que essas credenciais estejam corretas para o seu ambiente.

## Testando com o Postman

Após iniciar o servidor, use o Postman para testar os endpoints da API.  O caminho base para os endpoints é `/salaocrud/servico`:

*   **Listar todos os serviços (GET):**  `http://localhost:8080/salaocrud/servicos`
*   **Obter um serviço por ID (GET):** `http://localhost:8080/salaocrud/servico/{id}` (substitua `{id}` pelo ID do serviço)
*   **Criar um novo serviço (POST):** `http://localhost:8080/salaocrud/servico`
*   **Atualizar um serviço (PUT):** `http://localhost:8080/salaocrud/servico/{id}`
*   **Deletar um serviço (DELETE):** `http://localhost:8080/salaocrud/servico/{id}`

Para requisições POST e PUT, use a opção `x-www-form-urlencoded` no corpo da requisição, com os seguintes campos:

*   `nome` (o nome do serviço)
*   `descricao` (a descrição do serviço)
*   `valor` (o valor do serviço)


## Tecnologias Utilizadas

*   Node.js
*   TypeScript
*   Express.js
*   TypeORM
*   MySQL

--- ReadME2 ---

```markdown
# Projeto CRUD de Serviços de Salão

Este projeto implementa uma API RESTful para gerenciar serviços de um salão de beleza utilizando Node.js, TypeScript, Express, TypeORM e MySQL.


## Pré-requisitos

* Node.js (versão recomendada: 16 ou superior)
* npm (ou yarn)
* MySQL instalado e rodando

## Instalação

1. Clone o repositório: `git clone <link_do_repositorio>`
2. Navegue até o diretório do projeto: `cd <diretório_do_projeto>`
3. Instale as dependências: `npm install`
4. Execute o comando de build : `npm run build`

## Executando a Aplicação

1. Certifique-se de que o MySQL está rodando.
2. Execute o comando: `npm start` ou `npm run dev` (para desenvolvimento com watch)

## Conexão com o Banco de Dados

Configure as credenciais de conexão com o banco de dados no arquivo `db.config.ts`. As configurações padrão são:

HOST: "localhost"
PORT: 3306
USER: "root"
PASSWORD: "root"
DB: "mydb"

## Testando com o Postman

**Caminho base:** `/salaocrud`

**1. Listar todos os serviços (GET):**

*   **URL:** `http://localhost:8080/salaocrud/servicos`
*   **Método:** `GET`

**2. Obter um serviço por ID (GET):**

*   **URL:** `http://localhost:8080/salaocrud/servicos/1` (substitua `1` pelo ID desejado)
*   **Método:** `GET`

**3. Criar um novo serviço (POST):**

*   **URL:** `http://localhost:8080/salaocrud/servicos`
*   **Método:** `POST`
*   **Headers:** `Content-Type: application/json`
*   **Body:**

```json
{
  "nome": "Corte de cabelo",
  "descricao": "Corte masculino",
  "valor": 30.00
}
```

**4. Atualizar um serviço (PUT):**

*   **URL:** `http://localhost:8080/salaocrud/servicos/1` (substitua `1` pelo ID desejado)
*   **Método:** `PUT`
*   **Headers:** `Content-Type: application/json`
*   **Body:** (Dados atualizados do serviço)

**5. Deletar um serviço (DELETE):**

*   **URL:** `http://localhost:8080/salaocrud/servicos/1` (substitua `1` pelo ID desejado)
*   **Método:** `DELETE`


## Tratamento de Erros

*   `200 OK`: Requisição bem-sucedida.
*   `201 Created`: Recurso criado com sucesso.
*   `400 Bad Request`: Dados inválidos na requisição.
*   `404 Not Found`: Recurso não encontrado.
*   `500 Internal Server Error`: Erro no servidor.

## Licença

MIT

## Autor

Richardfcs
```





--- Para colaboradores ---

Instruções de uso:

1. Deve ter o node funcionando no dispositivo

2. Deve utilizar todas essas extensões:
npm init -y
npm install -G typescript
npm i -D tsx
npx tsc --init
npx gitignore node
npm i -D ts-node-dev
npm install typeorm --save
npm install reflect-metadata --save
npm install @types/node --save-dev
npm install mysql2 --save
npm i express --save
npm i -D @types/express
npm i cors --save
npm i -D @types/cors

3. Deve ter uma conexão com o banco de dados:
host: localhost | port:3306 

3.1. Deve ter um banco de dados chamado: mydb
use o create databasse mydb

4. base para o postman:
http://localhost:8080/salaocrud/servico

obs:
dá para usar post, get, put e delete
alguns vão precisar de
http://localhost:8080/salaocrud/servicos
outros vão precisar de:
http://localhost:8080/salaocrud/servico/{id}

se for fazer um post ou um put, vá ao body, na opcão x-www-form-urlencoded e preencher as keys com as linhas:
nome
descricao
valor
em value colocar o que quer passar para o banco, após isso aperte send.
