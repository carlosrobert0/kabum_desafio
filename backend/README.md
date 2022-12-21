# Painel de Administração de Clientes

Este projeto foi desenvolvido utilizando NodeJS com Typescript e Prisma como ORM

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto e rode ele em sua máquina.

### 📋 Pré-requisitos

É necessário que o NodeJS esteja instalado.
É necessário que tenha o Docker instalado, pois foi utilizado o Docker para subir
um container com o banco de dados em Postgres

### 🔧 Instalação

Rode npm install para instalar todas dependencias do projeto, logo após

Rode o comando 'docker-compose up' para criar um container do banco de dados
a partir do arquivo docker-compose.yml 

Após isso, com o container já criado no docker.

Rode npx prisma migrante up 
Para subir as migrations no banco 

Rode npm run dev para executar o servidor. 

Utilizei o insomnia pra ver todas rotas do servidor  

Obs.: Estou subindo o arquivo .env com a variavel DATABASE_URL de conexão com o banco de dados,
pois estou passando os dados estáticos, caso queria mudar os valores é so alterar
no docker-compose.yml e atualizar tambem na variavel em .env DATABASE_URL.
