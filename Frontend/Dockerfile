# Imagem Node.js
FROM node:latest

# Diretorio de Trabalho dentro do Container
WORKDIR /app

# Copia arquivos do projeto de configuração
COPY package*.json ./

# Instala o npm
RUN npm install

# Copia o restos dos arquivos
COPY . .

# Porta 5173 escutando
EXPOSE 5173

# Rodando comando "npm run dev"
CMD [ "npm","run","dev" ]
