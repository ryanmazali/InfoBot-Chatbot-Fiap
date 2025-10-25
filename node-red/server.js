const http = require("http");
const RED = require("node-red");

// Cria o servidor HTTP
const server = http.createServer();

// Configurações do Node-RED
const settings = {
  httpAdminRoot: "/red",    // painel do editor
  httpNodeRoot: "/",        // endpoints das flows
  userDir: "./data",         // diretório de dados
  functionGlobalContext: {}
};

// Inicializa o Node-RED
RED.init(server, settings);

// Escuta na porta fornecida pelo Render
server.listen(process.env.PORT || 1880);

// Inicia o Node-RED
RED.start();

