# Imagem do Ruby
FROM ruby:2.7.7

# Instalando as dependências
RUN apt-get update -qq && apt-get install -y nodejs

# Definindo /app como local de trabalho
WORKDIR /app

COPY Gemfile Gemfile.lock ./

RUN bundle install

COPY . .

EXPOSE 3000

CMD ["rails","s","-b","0.0.0.0"]