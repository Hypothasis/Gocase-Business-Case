# Gocase-Business-Case

## Docker compose para apliacação Frontend, Backend e Banco de dados

Esse projeto trata-se de um businnes case, teste técnico para Devops. Vamos rodar uma aplicação pokedex, só que com orquestração de conteiners.
Nesse caso vamos rodar Banco de Dados, Backend e Frontend com apenas um comando usando Docker:

1 - Passo é ter o Docker instalado na sua máquina, no meu caso eu uso Linux, ubuntu:

![](https://github.com/Hypothasis/Gocase-Business-Case/blob/main/prints/docker_v.png)

2 - Vamos usar o comando "docker-compose up -d"  para rodar nossa aplicações em forma de conteiners orquestrados:

![](https://github.com/Hypothasis/Gocase-Business-Case/blob/main/prints/docker_compose.png)

E caso de sucesso ao rodar o docker compose, irá aparecer ao semelhante no terminal como a imagem abaixo:

![](https://github.com/Hypothasis/Gocase-Business-Case/blob/main/prints/docker_compose_sucess.png)]

Com nossa aplicação rodando, podemos acessar o frontend:

```
 localhost:5173
```
Podemos acessar o Backend, substitua o :idPokemons pelo nome do seu pokemon, por exemplo, pikachu:

```
localhost:3000/api/v2/pokemons/:idPokemons
```

Assim podemos acessar tudo através do Front, com o link citado anteriormente. A imagem abaixo mostra como a aplicação deve rodar na sua máquina com o docker compose:

![](https://github.com/Hypothasis/Gocase-Business-Case/blob/main/prints/app_running.png)

Para finalizar todos os conteiners rodando, basta rodar o comando:

```
docker-compose down
```

Como a imagem abaixo:

![](https://github.com/Hypothasis/Gocase-Business-Case/blob/main/prints/docker_compose_down.png)

# Rodar cada conteiner separado:

Para rodar o conteiner de cada aplicação separada, devemos estar na pasta do Dockerfile:

Vammos criar a imagem do Frontend. Na pasta do Frontend

# Bônus:

![](https://github.com/Hypothasis/Gocase-Business-Case/blob/main/prints/shell.png)

![](https://github.com/Hypothasis/Gocase-Business-Case/blob/main/prints/delete_shell.png)
