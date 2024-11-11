#!/bin/bash

echo "<-------- Conteiner Rodando  -------->"

docker ps

echo "<-------- Deletando Frontend Conteiner  -------->"

docker rm -f frontend_conteiner

echo "<-------- Docker Image Rodando  -------->"

docker images

echo "<-------- Deletando Docker Image  -------->"

docker image rm -f frontend_image

echo "<-------- Imagem e Conteiner Frontend Encerrados com Sucesso  -------->"
