# Biblioteca de Livros API

Esta é uma API simples para gerenciar uma biblioteca de livros, desenvolvida usando NestJS e Prisma. A API permite registro e autenticação de usuários usando JWT e fornece funcionalidades CRUD para gerenciamento de livros.

## Funcionalidades

- Registro de usuário
- Login de usuário
- Validação de token JWT
- Listar todos os livros
- Adicionar um novo livro
- Atualizar um livro existente
- Deletar um livro
- Buscar um livro específico

## Tecnologias Utilizadas

- [NestJS](https://nestjs.com/)
- [Prisma](https://www.prisma.io/)
- [JWT (JSON Web Token)](https://jwt.io/)

## Diagrama do projeto da API

![Diagrama da API](https://github.com/hav0kinho/auth-api/blob/main/images/auth-api-diagram.png)

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/sua-biblioteca-api.git
cd sua-biblioteca-api
```

2. Instale as dependências

```bash
npm install
```

3. Configure o arquivo `.env`:

Crie um arquivo `.env` na raiz do projeto e adicione as varáveis desejadas. Lembre-se de colocar o DATABASE_URL.

4. Configure o Prisma:

```bash
npx prisma migrate dev --name init
npx prisma generate
```

## Uso

1. Inicie o servidor:

```bash
npm run start:dev
```

2. Acesse a API em http://localhost:3000
