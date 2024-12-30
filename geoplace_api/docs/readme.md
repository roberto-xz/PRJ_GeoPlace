

# API Routers Documentation

A seguir estão descritas as rotas da API, seus formatos de requisição e resposta, além dos possíveis erros.

---

## **POST /login**

Rota responsável por verificar os dados de login do usuário (email e senha). Retorna um JSON contendo um token JWT em caso de sucesso.

### **Requisição**
A requisição deve ser enviada no formato JSON com os seguintes campos:

```json
{
    "user_mail": "<valid-email-format>",
    "user_pass": "<SHA1-password-hash>"
}
```

- **user_mail**: O email do usuário (deve estar em formato válido).
- **user_pass**: A senha do usuário em formato hash SHA1.

### **Respostas**

#### Em caso de sucesso (Código 200):
```json
{
    "code": 200, 
    "user_token": "<JWT>"
}
```

#### Formato do JSON ou dados inválidos (Código 100):
```json
{
    "code": 100, 
    "message": "Invalid Request Format"
}
```

#### Email ou senha inválidos (Código 101):
```json
{
    "code": 101, 
    "message": "Wrong Login Data"
}
```

---

## **POST /sigin**
Rota responsável por criar um novo usuário. 

A requisição deve ser enviada no formato JSON com os seguintes campos:

```json
{
    "user_mail": "<valid-email-format>",
    "user_pass": "<SHA1-password-hash>"
}
```
- **user_mail**: O email do usuário (deve estar em formato válido).
- **user_pass**: A senha do usuário em formato hash SHA1.

### **Respostas**

#### Em caso de sucesso (Código 200):
```json
{
    "code": 200, 
    "message": 'Ok'
}
```
#### email/cpf/user. já resgistrados (Código 102 )
```json
{
    "code": 102, 
    "message": "Duplicate Data",
    "type": "CPF/EMAIL/USER"
}
```

#### O usuário Não pode ser Registrado (Código 103)
```json
{
    "code": 103, 
    "message": "Erro On Register New User",
}
```

#### Usuário registrado, Mas o códico de validação não foi enviado.

```json
{
    "code": 104, 
    "message": "Erro On Send Validation Code",
}
```

---

## **POST /valid**

Rota responsável por validar tokens de login. Essa rota verifica se o token enviado é válido.

### **Requisição**
A requisição deve conter o token JWT no corpo da requisição:

```json
{
    "user_token": "<JWT>"
}
```

### **Respostas**

#### Token válido (Código 200):
```json
{
    "code": 200,
    "message": "ok"
}
```

#### Token inválido ou erro de verificação (Código 100):
```json
{
    "code": 100,
    "message": "Invalid Request Format"
}
```

---


## **Códigos de Erro da API**

- **200 (Ok)**: A requisição foi bem-sucedida.
  
- **100 (Invalid Request Format)**: O formato do JSON ou os dados fornecidos são inválidos. Isso pode incluir:
  - Email com formato inválido.
  - Senha não em formato hash SHA1.
  - Estrutura do JSON malformada.

- **101 (Invalid Data)**: Os dados fornecidos são válidos, mas não correspondem aos registros no banco de dados (ex.: email ou senha incorretos).

- **102 (Duplicate Data)**: Os dados fornencidos são válidos, porém já existe na base de dados e são tidos
como únicos.

- **300 (Parse Json Error)**: O servidor recebu um json com uma sintax inválida e não conseguio executar um parse.