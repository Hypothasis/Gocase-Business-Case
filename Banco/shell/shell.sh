#!/bin/bash

echo "<-------- Criando Docker Image  -------->"

cd ..

docker build -t banco_image .

echo "<-------- Rodando Docker Container -------->"

docker run -d --name banco_container -p 3306:3306 banco_image 

echo "<-------- Porta do Conteiner -------->"

docker port banco_container

echo "<-------- Conteiner Banco Rodando com Sucesso -------->"

