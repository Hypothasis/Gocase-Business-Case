# Case de Avaliação para Estágio em DevOps

Bem-vindo(a) ao case de avaliação de conhecimentos na área de DevOps. O objetivo deste exercício é avaliar suas habilidades em Docker, automação de deployment e integração contínua, utilizando o Vercel como plataforma de hosting gratuita.

## Descrição do Desafio

Você deverá:

1. **Dockerizar a aplicação** fornecida neste repositório.
2. **Configurar um workflow de CI/CD** que automatize o deploy da aplicação para uma conta gratuita no Vercel.

## Instruções

1. **Dockerização**:
   - Crie um Dockerfile que configure e execute a aplicação de forma adequada.
   - Certifique-se de que o container esteja configurado corretamente para rodar a aplicação localmente de forma ótima.

2. **CI/CD Workflow**:
   - Suba um workflow para o GitHub Actions que realize o deploy da aplicação para uma conta gratuita no Vercel.
   - O workflow deve ser acionado automaticamente a cada push na branch principal.

## Requisitos

- **Docker**: A aplicação precisa rodar em um container Docker sem erros e de forma otimizada.
- **Vercel**: O deploy da aplicação deve ser automatizado e bem-sucedido na plataforma Vercel.
- **CI/CD**: Um pipeline funcional deve ser configurado para garantir que cada alteração no código seja enviada automaticamente para produção.

## Avaliação

Serão avaliados os seguintes aspectos:

1. **Configuração correta do Docker**: O container deve ser facilmente reproduzível em qualquer ambiente.
2. **Automação de deploy**: O workflow de CI/CD deve garantir que o deploy no Vercel aconteça de forma automática e sem falhas.
3. **Clareza e Organização**: O código e as configurações devem ser claros e bem organizados.
4. **Otimização**: Como um dos princípios da metodologia DevOps é o aprimoramento contpinuo, será analisado os processos e configurações utilizadas na entrega do case.

## O que entregar

- Link para o repositório no GitHub com o Dockerfile e o pipeline configurado.
- Documentação no README.md explicando como rodar o container localmente e como funciona o workflow de CI/CD.

## Observações

- Utilize apenas serviços gratuitos durante o case.
- Fique à vontade para otimizar ou melhorar a aplicação e a estrutura do pipeline se julgar necessário.

Boa sorte!