 # pm-ii-todo-api (NestJS) - espelho do db.json do json-server

 Este projeto utiliza NestJS, TypeORM e PostgreSQL.

Recursos expostos (compatíveis com rotas CRUD do json-server):
- /tasks

 Instruções rápidas (PowerShell - Windows)

 1. Copie o arquivo `.env.example` para `.env` e ajuste as variáveis se necessário.

 2. Inicie o PostgreSQL via Docker Compose (na pasta do projeto `todo-list`):

 ```powershell
 docker compose up -d
 ```

 3. Instale as dependências:

 ```powershell
 npm install
 ```

 4. Rode em modo de desenvolvimento (reinicia automaticamente):

 ```powershell
 npm run start:dev
 ```

 5. Teste uma rota (exemplo usando curl no PowerShell):

 ```powershell
 curl http://localhost:3000/tasks
 ```

 Notas e suposições
 - O `TypeORM` está configurado com `synchronize: true` para facilitar o desenvolvimento (cria/atualiza tabelas automaticamente). Não é recomendado usar isso em produção.

 Se quiser que eu rode os comandos Docker e npm aqui, autorize que eu execute no terminal do workspace e eu testo as rotas e retorno os resultados.

