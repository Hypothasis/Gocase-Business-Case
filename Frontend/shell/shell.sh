#!/bin/bash

echo "<-------- Criando Docker Image  -------->"

cd ..

docker build -t frontend_image .

echo "<-------- Rodando Docker Container -------->"

docker run -d --name frontend_conteiner -p 5173:5173 frontend_image

echo "<-------- Porta do Conteiner -------->"

docker port frontend_conteiner

echo "<-------- Conteiner Frontend Rodando com Sucesso -------->"

