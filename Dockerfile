# Usa a versão LTS do Node.js
FROM node:lts

# Define o diretório de trabalho no contêiner
WORKDIR /app

# Copia o package.json e package-lock.json para instalar as dependências
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o código do projeto para o contêiner
COPY . .

# Expõe a porta que o servidor usa
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["node", "server.js"]
