const http = require("http");
const express = require("express");
const RED = require("node-red");

const app = express();
const server = http.createServer(app);

// configurações básicas do Node-RED
const settings = {
  httpAdminRoot: "/red",    // painel de administração
  httpNodeRoot: "/",        // endpoints públicos
  userDir: "./data",        // diretório local de dados
  flowFile: "flows.json",
  functionGlobalContext: {}
};

// inicializa o Node-RED
RED.init(server, settings);

// monta os endpoints
app.use(settings.httpAdminRoot, RED.httpAdmin);
app.use(settings.httpNodeRoot, RED.httpNode);

// Render usa a variável de ambiente PORT
const port = process.env.PORT || 1880;

// inicia o servidor na porta pública
server.listen(port, "0.0.0.0", () => {
  console.log(`✅ Node-RED está rodando na porta ${port}`);
});

RED.start();
