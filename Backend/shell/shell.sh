#!/bin/bash

echo "<-------- Criando Docker Image  -------->"

cd ..

docker build -t backend_image .

echo "<-------- Rodando Docker Container -------->"

docker run -d --name backend_conteiner -p 3000:3000 backend_image

echo "<-------- Porta do Conteiner -------->"

docker port backend_conteiner

echo "<-------- Conteiner Backend Rodando com Sucesso -------->"

