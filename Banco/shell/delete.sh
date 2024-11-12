#!/bin/bash

echo "<-------- Conteiner Rodando  -------->"

docker ps

echo "<-------- Deletando Backend Conteiner  -------->"

docker rm -f banco_container

echo "<-------- Docker Image Rodando  -------->"

docker images

echo "<-------- Deletando Docker Image  -------->"

docker image rm -f banco_image

echo "<-------- Imagem e Conteiner Backend Encerrados com Sucesso  -------->"
