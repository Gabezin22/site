# Use a imagem Node.js
FROM node:16

# Define o diretório de trabalho
WORKDIR /app

# Copia todos os arquivos para o container
COPY . .


# Instala as dependências (se necessário)
RUN npm install express

# Expõe a porta
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["node", "server.js"]
