
FROM balenalib/amd64-alpine-node:3.18
LABEL version = "0.1.1" \
      service = "restAPI" \
      api.name = "geoplace-API" \
      api.depends = "Redis,PostgreSQL" \
      api.github = "https://geoplace-api" \
      api.licence = "GLP-V3" 

WORKDIR /usr/geoplace_api
COPY . .

RUN node --version
RUN npm install -g pnpm
RUN pnpm install
EXPOSE 3000

# Variaveis de ambiente
ENV api_host=localhost \
    api_port=3000 \
    api_jkey=a1o11ms \

    db_host=localhost \
    db_port=3306 \
    db_user=geoplace \
    db_pass=geoplace \
    db_name=geoplace \

    email_user=admin@test.com \
    email_pass=senh1234567890 \
    email_smtp=stmp.exemple.i \
    email_serv=gmail \
    front_url=http://localhost:5173/active/ 

ENTRYPOINT ["pnpm","run"]
CMD ["dev"]