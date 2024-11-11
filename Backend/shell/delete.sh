#!/bin/bash

echo "<-------- Conteiner Rodando  -------->"

docker ps

echo "<-------- Deletando Backend Conteiner  -------->"

docker rm -f backend_conteiner

echo "<-------- Docker Image Rodando  -------->"

docker images

echo "<-------- Deletando Docker Image  -------->"

docker image rm -f backend_image

echo "<-------- Imagem e Conteiner Backend Encerrados com Sucesso  -------->"
