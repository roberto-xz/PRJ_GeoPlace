### geoplace-api

Esse projeto foi desenvolvido como parte do projeto **geoplace**, sendo ele o responsável por o **CRUD** da aplicação, dispondo as seguintes rotas e suas funcionalidades. 

| endpoint  |   method     |  REq/REs | Documentação|
|---------- |------------|-----------|----------|
| /user-login    | POST | json | #001 [document](docs/router_login.md) |
| /user-sigin    | POST | json | #202 |
| /user-delet    | POST | json | #203 |
| /user-active-account    | POST | json | #204 |

Todas essas rotas devem conter um **json** devidamente formatado e válido, como o payload da solicitação, seguindo a estrutura requerida para cada rota, todos os endpoints retornam um **json** em uma estrutura padronizada.  Você pode ver a estrutura de `request` e `response` de cada rota clicando no link da coluna de `Documentação` da rota em específico.

--- 

### Códigos De retorno
 **code: 200**
 **Descrição:** A operação foi bem-sucedida. Esse código é retornado para indicar que a solicitação foi processada com sucesso.
 
 **code: 100:  Invalid Request Format**
**Descrição:** O formato da requisição é inválido ou não segue o padrão esperado pela API. Pode ocorrer quando campos obrigatórios estão faltando ou com formato incorreto.

**code: 101: Invalid Data**
**Descrição:** Os dados fornecidos na requisição são inválidos ou não correspondem ao que a API espera. Por exemplo, um e-mail ou senha incorretos no processo de login ou signup.

**code: 102: Duplicate Data**
**Descrição:** O valor fornecido já existe no sistema e não pode ser registrado novamente. Usado, por exemplo, para indicar que o e-mail informado já está registrado, no `response` há um campo `type`, o qual indica o campo duplicado.

**code: 103: Operation Failed**
**Descrição:** Um erro genérico ocorreu no servidor durante o processamento da requisição. Isso pode ser devido a falhas internas, como problemas no banco de dados ou serviços auxiliares (ex: Redis, Nodemailer, sequelizer, etc.. ).

**code: 104: Token Expired**
 **Descrição:** O token fornecido para autenticação ou validação expirou. Normalmente usado em rotas que requerem tokens JWT para verificar a autenticidade ou validade de uma sessão.

 **code: 300: Invalid JSON Format**
 **Descrição:** O formato do JSON enviado na requisição está inválido. A API não conseguiu processar a entrada devido a problemas de formatação (erro no parsing ).

---

### Iniciando a API

Esse projeto depende de serviços externos, são eles, um servidor de cache `redis` e um servidor de banco de dados `mariadb`, você pode instalar esses serviços na sua máquina ou usando o docker, além disso, também é nessesário o `nodejs`, `pnpm` e uma conta de email para envio de emails.

#### Iniciando sem o docker 
Para iniciar a API sem o docker, e nessesário que você baixe e configure o `redis` e o `mariadb` na sua máquina, e tenha uma versão mais recente do nodejs. 

```bash
npm install -g pnpm
git clone <esse-repositorio> geoplace.api
cd geoplace.api
pnpm install
```

Após executar esses passos, configure o `.env` arquivo presente na pasta root do projeto.  Feito isso você já pode iniciar a API com o comando ``pnpm run dev`

#### Iniciando com o docker 

Para iniciar com o Docker, é necessário ter familiaridade com ele. Após clonar o repositório, 
suba um container para o serviço de cache usado (`redis`) e outro para o servidor 
de banco de dados (`mariadb`). 

Em seguida, entre na pasta do repositório e configure as variáveis de ambiente no `Dockerfile`
e execute o comando `sudo docker build -t geoplace_api:1.0 .`, espera a imagem ser construida e
execute o comando `sudo docker run -it geoplace_api:1.0` , e você verá o ip e porta da api..