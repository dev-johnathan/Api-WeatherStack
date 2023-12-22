# Dockerfile

# Usa a imagem base do Node.js na versão 20.9.0
FROM node:20.9.0

# Cria o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todos os arquivos da aplicação
COPY . .

# Expoe porta 3000 
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "src/app.js"]