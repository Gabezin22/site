const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Configurar a pasta pública para servir arquivos estáticos
app.use(express.static(__dirname)); // Garante que tudo na raiz esteja disponível

// Rota principal para o index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/127.0.0.1_8081/dl/index.html');
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
