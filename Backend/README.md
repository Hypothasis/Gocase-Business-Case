# Case de Avaliação para Estágio em DevOps

Bem-vindo(a) ao case de avaliação de conhecimentos na área de DevOps. O objetivo deste exercício é avaliar suas habilidades em Docker, automação de deployment e integração de serviços, utilizando um banco de dados e compondo uma aplicação full stack (backend e frontend).

## Descrição do Desafio

Você deverá:

1. **Integrar a aplicação backend em Ruby** fornecida neste repositório com a aplicação frontend existente no outro repositório.
2. **Instanciar um banco de dados** utilizando Docker Compose.
3. **Criar um arquivo Docker Compose** que orquestre os containers para o backend, frontend e banco de dados.
4. **Garantir** que toda a aplicação seja acessível e funcional após a integração.

## Instruções

1. **Integração Backend-Frontend**:
   - Integre a aplicação backend (este repositório) com a aplicação frontend disponível no outro repositório fornecido.
   - Certifique-se de que o frontend consuma as APIs fornecidas pelo backend corretamente.

2. **Configuração do Banco de Dados**:
   - Instancie um banco de dados.
   - Garanta que o backend Ruby se conecte corretamente ao banco de dados, configurando as variáveis de ambiente necessárias.

3. **Docker Compose**:
   - Crie um arquivo \`docker-compose.yml\` que orquestre:
     - O backend em Ruby.
     - O frontend da aplicação.
     - O banco de dados.
   - Certifique-se de que todos os containers possam se comunicar entre si de maneira eficiente e segura.

4. **Acessibilidade**:
   - A aplicação completa (frontend e backend) deve ser acessível através de um navegador e funcionar corretamente, realizando todas as interações necessárias com o banco de dados.

## Requisitos

- **Docker e Docker Compose**: A aplicação deve rodar em containers Docker sem erros, e o Docker Compose deve orquestrar os serviços.
- **Banco de Dados**: O banco de dados deve ser configurado e acessado pela aplicação backend sem problemas.
- **Integração**: A comunicação entre frontend, backend e banco de dados deve ser totalmente funcional.

## Avaliação

Serão avaliados os seguintes aspectos:

1. **Configuração correta do Docker Compose**: A orquestração dos containers deve ser funcional e bem configurada.
2. **Integração backend-frontend**: O frontend deve consumir as APIs do backend corretamente.
3. **Funcionamento do banco de dados**: O backend deve conseguir acessar corretamente o banco de dados.
4. **Clareza e Organização**: O código e as configurações devem ser claros e bem organizados.
5. **Otimização**: A eficiência e simplicidade da implementação e da orquestração serão valorizadas.

## O que entregar

- Link para o repositório no GitHub com o Dockerfile, o arquivo \`docker-compose.yml\` e a documentação.
- Documentação no README.md explicando como rodar os containers localmente, como funciona a integração e como acessar a aplicação completa.

## Observações

- Utilize apenas serviços gratuitos durante o case.
- Fique à vontade para otimizar ou melhorar a estrutura da aplicação e o pipeline, caso necessário.
- Certifique-se de que a aplicação seja acessível a partir de um navegador após a integração.

Boa sorte!