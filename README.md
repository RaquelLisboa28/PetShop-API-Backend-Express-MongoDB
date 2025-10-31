💡 Visão geral
Pequena aplicação CRUD organizada por camadas:
config/db.js — conexão / wrapper simples para MongoDB.
controllers/* — lógica de cada recurso.
repositories/* — repositório por coleção (usa config/db.js).
routes/* — rotas Express por recurso.
server.js — servidor Express principal.
Objetivo: exemplificar organização de uma API REST com validações básicas e persistência em MongoDB.

✅ Funcionalidades
CRUD para pet, dono, servico (nome, preço etc.)
CRUD para atendimento (registro de serviços prestados a pets/donos)
Validações básicas no controller (campos obrigatórios)
Persistência em MongoDB (database petshop)

📁 Estrutura principal
.
├─ config/
│  └─ db.js
├─ controllers/
│  ├─ AtendimentoController.js
│  ├─ DonoController.js
│  ├─ PetController.js
│  └─ ServicoController.js
├─ repositories/
│  ├─ AtendimentoReposity.js
│  ├─ DonoReposity.js
│  ├─ PetReposity.js
│  └─ ServicoReposity.js
├─ routes/
│  ├─ atendimento.js
│  ├─ dono.js
│  ├─ pet.js
│  └─ servico.js
└─ server.js

🛠 Requisitos
Node.js (recomendo v18+)
MongoDB rodando localmente (ou URI para Mongo Atlas)
NPM ou Yarn

⚙️ Instalação (exemplo)

Clone o repositório:
git clone https://github.com/RaquelLisboa28/PetShop-API-Backend-Express-MongoDB.git
cd PetShop-API-Backend-Express-MongoDB


Instale dependências:
npm init -y
npm i express mongodb
npm i -D nodemon


package.json (exemplo mínimo para rodar):

{
  "name": "petshop-api",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.x",
    "mongodb": "^5.x"
  }
}


Inicie o MongoDB (local) e rode a API:
npm run dev
# ou
npm start

O servidor iniciará na porta 6500 (conforme server.js): http://localhost:6500.

🔌 Conexão com MongoDB
Atualmente a conexão está em config/db.js usando:

const uri = "mongodb://localhost:27017"
const client = new MongoClient(uri)


Se quiser usar conexão por variável de ambiente (recomendado), substitua uri por process.env.MONGO_URI e carregue com dotenv.

🧭 Endpoints (base: http://localhost:6500)
Recurso pet
GET /pet/ — listar todos os pets
GET /pet/:id — obter pet por _id
POST /pet/ — criar pet

Body JSON obrigatório (exemplo):

{
  "nome": "Rex",
  "sexo": "M",
  "raca": "Vira-lata",
  "idade": 3
}

PUT /pet/:id — atualizar pet (body com campos a alterar)
DELETE /pet/:id — remover pet

Recurso dono
GET /dono/
GET /dono/:id
POST /dono/ — criar dono

{
  "nome": "Ana",
  "idade": 30,
  "contato": "1199999-9999"
}

PUT /dono/:id
DELETE /dono/:id

Recurso servico

GET /servico/
GET /servico/:id
POST /servico/ — criar serviço

{
  "nome": "Banho e Tosa",
  "preco": 80
}


PUT /servico/:id
DELETE /servico/:id

Recurso atendimento

GET /atendimento/
GET /atendimento/:id
POST /atendimento/ — criar atendimento (necessita petId, donoId, servicoId)

{
  "petId": "64f5a1b2c3d4e5f678901234",
  "donoId": "64f5a1b2c3d4e5f678901235",
  "servicoId": "64f5a1b2c3d4e5f678901236",
  "observacoes": "Chegou sujo"
}


PUT /atendimento/:id
DELETE /atendimento/:id

📌 Exemplos curl

Criar um pet:
curl -X POST http://localhost:6500/pet \
  -H "Content-Type: application/json" \
  -d '{"nome":"Rex","sexo":"M","raca":"Vira-lata","idade":3}'

Listar donos:
curl http://localhost:6500/dono

Criar atendimento (exemplo):
curl -X POST http://localhost:6500/atendimento \
  -H "Content-Type: application/json" \
  -d '{"petId":"<petId>","donoId":"<donoId>","servicoId":"<servicoId>","observacoes":"..."}'
