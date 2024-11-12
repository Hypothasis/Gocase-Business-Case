# Gocase-Business-Case

Esse projeto trata-se de um businnes case, teste técnico para Devops.

## Docker compose para apliacação Frontend, Backend e Banco de dados

Vamos rodar uma aplicação pokedex, só que com orquestração de conteiners.
Nesse caso vamos rodar Banco de Dados, Backend e Frontend com apenas um comando usando Docker:

- Passo é ter o Docker instalado na sua máquina, no meu caso eu uso Linux, ubuntu:

![](https://github.com/Hypothasis/Gocase-Business-Case/blob/main/prints/docker_v.png)

- Vamos usar o comando "docker-compose up -d"  para rodar nossa aplicações em forma de conteiners orquestrados:

![](https://github.com/Hypothasis/Gocase-Business-Case/blob/main/prints/docker_compose.png)

E caso de sucesso ao rodar o docker compose, irá aparecer ao semelhante no terminal como a imagem abaixo:

![](https://github.com/Hypothasis/Gocase-Business-Case/blob/main/prints/docker_compose_sucess.png)]

- Com nossa aplicação rodando, podemos acessar o frontend:

```
 localhost:5173
```
- Podemos acessar o Backend, substitua o :idPokemons pelo nome do seu pokemon, por exemplo, pikachu:

```
localhost:3000/api/v2/pokemons/:idPokemons
```

- Assim podemos acessar tudo através do Front, com o link citado anteriormente. A imagem abaixo mostra como a aplicação deve rodar na sua máquina com o docker compose:

![](https://github.com/Hypothasis/Gocase-Business-Case/blob/main/prints/app_running.png)

- Para finalizar todos os conteiners rodando, basta rodar o comando:

```
docker-compose down
```

- Como a imagem abaixo:

![](https://github.com/Hypothasis/Gocase-Business-Case/blob/main/prints/docker_compose_down.png)

# Rodar cada conteiner separado:

Para rodar o conteiner de cada aplicação separada, devemos estar na pasta do Dockerfile:

Vammos criar a imagem do Frontend. Na pasta do Frontend temos o arquivo Dockerfile. Abra seu terminal e vamos criar uma imagem docker para essa aplicação

```
docker build -t "nome da imagem" .
```
Esse comando cria imagem a partir de um Dockerfile, assim o -t significa Tag, que vai ser a tag da nossa imagem Docker, o "." indica aonde está nosso Dockerfile, que está na nosso diretório atual, caso seja outro, basta colocar o caminho dele no lugar do "."

Agora vamos fazer o build da nossa imagem para virar um conteiner. Nossa aplicação Frontend usa a porta 5173, vamos usar esse paramêtro para criar nosso conteiner, o comando abaixo exemplifica melhor:

```
docker run -d --name "nome do nosso conteiner" -p 5173:5173 "nome da imagem"
```

No comando docker run, usamos o -d para rodar no background, -p passa o parêmetro da porta a ser escutada "local":"conteiner", além do parâmetro de passa o nome da imagem para construir o conteiner.

Para encerrarmos nosso conteiner basta excluir nosso conteiner e depois a imagem, como abaixo:
```
#Excluindo conteiner
docker rm -f "nome conteiner"

#Excluindo Imagem
docker image rm -f "nome imagem"
```

# Bônus:

Em cada aplicação temos uma pasta Shell, que são arquivos para automatizar esse processo de criar e deletar os conteiners e imagens. Cada arquivo shell.sh criamos e instanciamos cada imagem e conteiner da aquela aplicação, como assim? se na pasta do Frontend rodarmos esse shell.sh, criamos tanto a imagem e conteiner com apenas um enter. Para excluir em apenas um click basta rodar o delete.sh, que exclui tanto o conteiner e imagem.

As imagens abaixo ilustram melhor:

- Criando com um click:
![](https://github.com/Hypothasis/Gocase-Business-Case/blob/main/prints/shell.png)


- Deletando com um click:
![](https://github.com/Hypothasis/Gocase-Business-Case/blob/main/prints/delete_shell.png)
# Gocase-Business-Case