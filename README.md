# 🤖 InfoBot — Chatbot Cognitivo Integrado (IBM Watson + Node-RED + Telegram)

O **InfoBot** é um assistente cognitivo desenvolvido como projeto acadêmico na **FIAP**, utilizando o **IBM Watson Assistant v2** e o **Node-RED** para criar uma integração inteligente com o **Telegram**.  
O chatbot é capaz de responder perguntas sobre **clima**, **cotações de moedas**, **ações da bolsa** e **notícias de tecnologia**, oferecendo uma experiência conversacional fluida e contextualizada.

---

## 💡 Funcionalidades

- 🌦️ Consulta de clima (hoje, amanhã ou semana)
- 💵 Cotação de moedas (Dólar, Euro, Bitcoin, etc.)
- 📈 Preço de ações da bolsa (Petrobras, Vale, Itaú, Magazine Luiza, entre outras)
- 🤖 Notícias sobre tecnologia
- 💬 Perguntas gerais e diálogos contextuais

---

## 🧠 Tecnologias Utilizadas

| Camada | Tecnologia | Função |
|--------|-------------|--------|
| 💬 IA Cognitiva | **IBM Watson Assistant (v2)** | Processamento de linguagem natural e entendimento de intenções |
| 🔁 Integração | **Node-RED** | Conexão entre o Watson e o Telegram |
| 📱 Interface | **Telegram Bot API** | Canal de interação com o usuário |
| ☁️ Nuvem | **IBM Cloud** | Hospedagem e autenticação da aplicação |

---

## ⚙️ Arquitetura Geral

Usuário (Telegram)
↓
Node-RED (Integração e automação de mensagens)
↓
IBM Watson Assistant (IA cognitiva)
↓
Respostas inteligentes e contextuais


---

## 🧩 Estrutura do Projeto

📂 InfoBot-Chatbot-FIAP
┣ 📁 watson/
┃ ┗ InfoBot.json → Skill exportada do IBM Watson Assistant
┣ 📁 node-red/
┃ ┗ InfoBot_Fluxo.json → Fluxo completo configurado no Node-RED
┣ 📄 README.md → Documentação do projeto
┗ 📄 .gitignore (opcional)

---

## 🚀 Execução do Projeto

### 🔹 1. Importar o fluxo no Node-RED
1. Abra o Node-RED (`http://127.0.0.1:1880`)
2. Clique no menu (☰) → **Import → Clipboard**
3. Cole o conteúdo do arquivo `InfoBot_Fluxo.json`
4. Configure o nó do **Telegram Bot** com o token do seu bot (gerado pelo `@BotFather`)

---

### 🔹 2. Conectar ao Watson Assistant
1. Crie um serviço **Watson Assistant** na sua conta do **IBM Cloud**  
2. Copie as credenciais (API Key e URL)
3. Configure no nó `watson-assistant-v2` do Node-RED:
   - **Service endpoint:** sua URL da instância (ex: `https://api.au-syd.assistant.watson.cloud.ibm.com`)
   - **Assistant ID:** ID da sua skill Watson (ex: `97187cb7-ee36-4484-bc19-033011b83dc3`)
   - **API Key:** (obtida no painel do IBM Cloud)

---

### 🔹 3. Testar no Telegram
1. Inicie uma conversa com o seu bot no Telegram  
2. Envie mensagens como:
   - “Olá”
   - “Qual o clima hoje?”
   - “Ações da bolsa”
   - “Cotação do dólar”
3. O InfoBot responderá com informações inteligentes e contextualizadas 🎯

---

## 🧠 Estrutura do Fluxo Node-RED

O fluxo é composto pelos seguintes nós:

| Tipo de Nó | Nome no Fluxo | Função |
|-------------|---------------|--------|
| 🟢 `telegram receiver` | — | Recebe mensagens enviadas pelo usuário no Telegram |
| 🟡 `change` | Prepara entrada | Formata o conteúdo recebido para o formato esperado pelo Watson |
| 🔵 `watson-assistant-v2` | InfoBot | Envia as mensagens ao IBM Watson Assistant e recebe as respostas cognitivas |
| 🟠 `function` | Concatena mensagens | Junta várias respostas do Watson em um único texto coerente |
| 🟡 `change` | Prepara retorno | Ajusta o formato da mensagem para envio ao Telegram |
| 🔴 `telegram sender` | — | Envia a resposta final do bot para o usuário no Telegram |

---

## 📘 Aprendizados e Resultados

Durante o desenvolvimento do projeto, foram aplicados conceitos de:
- Criação e treinamento de intenções e entidades no **Watson Assistant**
- Construção de fluxos condicionais e contextuais
- Integração entre **Node-RED** e **APIs externas (Telegram)**
- Manutenção de sessão e contexto do usuário (multi-turn conversations)

O resultado é um **chatbot funcional, contextualizado e inteligente**, que serve como base para soluções corporativas ou acadêmicas com foco em automação conversacional.

---

## 👨‍💻 Autor

**Ryan Vieira de Aguiar Mazali**  
Estudante de **Análise e Desenvolvimento de Sistemas – FIAP**  
📍 São Paulo, Brasil  

🔗 [LinkedIn](https://www.linkedin.com/in/ryanmazali)  
💻 [GitHub](https://github.com/ryanmazali)

---

## 🏫 Instituição

**FIAP – Faculdade de Informática e Administração Paulista**  
Disciplina: **AI & Chatbot**  
Professor: *[Vinicius Holanda]*

---

## 📜 Licença
Este projeto é de uso **educacional e demonstrativo**, com fins de aprendizado em **IA, integração de sistemas e automação cognitiva**.  
Todos os direitos reservados © Ryan Mazali — 2025.