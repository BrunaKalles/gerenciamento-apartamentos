
# Gerenciamento de Apartamentos

API REST para cadastro de proprietários, autenticação e listagem de apartamentos disponíveis para aluguel.

## Funcionalidades

- Cadastro de Proprietário
- Login com autenticação JWT
- Listagem de apartamentos disponíveis (rota protegida)

## Regras de Negócio

- O e-mail do proprietário deve ser único.
- Todos os campos obrigatórios (nome, e-mail, senha) devem ser validados antes do cadastro.
- A senha deve ter mínimo de 8 caracteres, contendo pelo menos uma letra maiúscula, uma minúscula e um número.
- O cadastro retorna confirmação de sucesso ou mensagem de erro.
- Login por e-mail e senha válidos, retorna token JWT.
- Somente usuários autenticados podem acessar rotas protegidas.
- Listagem exibe informações básicas do apartamento (nome, descrição, localização, valor da diária).
- Caso não existam apartamentos disponíveis, retorna mensagem informando isso.

## Instalação

```bash
npm install
```

## Execução

```bash
node index.js
```

Servidor padrão: http://localhost:3000

## Documentação Swagger

Acesse a documentação completa dos endpoints e modelos em:

http://localhost:3000/api-docs

## Estrutura do Projeto

- `routes/` - Rotas da API
- `controllers/` - Lógica dos endpoints
- `service/` - Regras de negócio e manipulação dos dados
- `model/` - Modelos das entidades
- `middleware/` - Middleware de autenticação JWT
- `resources/` - Documentação Swagger

## User Stories e Regras Detalhadas

### 1) Cadastro de Proprietário
Como proprietário, quero me cadastrar na plataforma para gerenciar meus apartamentos disponíveis para aluguel.

### 2) Login
Como proprietário já cadastrado, quero fazer login para acessar minhas informações e gerenciar meus apartamentos de forma segura.

### 3) Listagem de Apartamento Disponível
Como usuário (proprietário), quero visualizar a lista de apartamentos disponíveis para aluguel.
