# API Documentation

### Endpoints 

## 1. **Login**

- **URL:** `/api/login`
- **Method:** `POST`
- **Description:** Autentica o usuário e retorna um token JWT em caso de sucesso.

#### Request Body

```json
{
  "user_mail": "string",
  "user_pass": "string" // SHA1 hash
}
```

#### Possible Responses

- **Success:**
    
    ```json
    {
      "code": 200,
      "message": "Ok",
      "data": {
        "token": "jwt_token"
      }
    }
    ```
    
- **Errors:**
    - `error_invalid_input` (Código: 101)  
        Exemplo:
        
        ```json
        {
          "code": 101,
          "message": "Invalid Data"
        }
        ```
        
    - `error_operation_failed` (Código: 103)  
        Exemplo:
        
        ```json
        {
          "code": 103,
          "message": "Operation Failed"
        }
        ```
        

---

## 2. **Sign In**

- **URL:** `/api/sigin`
- **Method:** `POST`
- **Description:** Registra um novo usuário. Retorna um simples `success` em caso de sucesso.

#### Request Body

```json
{
  "user_mail": "string",
  "user_pass": "string" // SHA1 hash
}
```

#### Possible Responses

- **Success:**
    
    ```json
    {
      "code": 200,
      "message": "Ok"
    }
    ```
    
- **Errors:**
    - `error_invalid_input` (Código: 101)  
        Exemplo:
        
        ```json
        {
          "code": 101,
          "message": "Invalid Data"
        }
        ```
        
    - `error_duplicate_entry` (Código: 102)  
        Exemplo:
        
        ```json
        {
          "code": 102,
          "message": "Duplicate Data",
          "type": "Email"
        }
        ```
        
    - `error_operation_failed` (Código: 103)  
        Exemplo:
        
        ```json
        {
          "code": 103,
          "message": "Operation Failed"
        }
        ```
        

---

## 3. **Valid**

- **URL:** `/api/valid`
- **Method:** `POST`
- **Description:** Valida um token JWT e retorna informações sobre o usuário.

#### Request Body

```json
{
  "token": "string" // JWT
}
```

#### Possible Responses

- **Success:**
    
    ```json
    {
      "code": 200,
      "message": "Ok",
      "data": {
        "user_id": "string",
        "user_mail": "string"
      }
    }
    ```
    
- **Errors:**
    - `error_invalid_input` (Código: 101)  
        Exemplo:
        
        ```json
        {
          "code": 101,
          "message": "Invalid Data"
        }
        ```
        
    - `error_token_expired` (Código: 104)  
        Exemplo:
        
        ```json
        {
          "code": 104,
          "message": "Token Expired"
        }
        ```
        
    - `error_operation_failed` (Código: 103)  
        Exemplo:
        
        ```json
        {
          "code": 103,
          "message": "Operation Failed"
        }
        ```
        

---

## 4. **Active**

- **URL:** `/api/active`
- **Method:** `POST`
- **Description:** Ativa a conta de um usuário usando um token temporário. Retorna `success` em caso de sucesso.

#### Request Body

```json
{
  "token": "string" // Temporary token
}
```

#### Possible Responses

- **Success:**
    
    ```json
    {
      "code": 200,
      "message": "Ok"
    }
    ```
    
- **Errors:**
    - `error_invalid_input` (Código: 101)  
        Exemplo:
        
        ```json
        {
          "code": 101,
          "message": "Invalid Data"
        }
        ```
        
    - `error_operation_failed` (Código: 103)  
        Exemplo:
        
        ```json
        {
          "code": 103,
          "message": "Operation Failed"
        }
        ```
        

---

## **Códigos de Sucesso**

- **200: Ok**
 **Descrição:** A operação foi bem-sucedida. Esse código é retornado para indicar que a solicitação foi processada com sucesso.

### **Códigos de Erro**

- **100: Invalid Request Format**
    **Descrição:** O formato da requisição é inválido ou não segue o padrão esperado pela API. Pode ocorrer quando campos obrigatórios estão faltando ou com formato incorreto.
    <br>
    
- **101: Invalid Data**
**Descrição:** Os dados fornecidos na requisição são inválidos ou não correspondem ao que a API espera. Por exemplo, um e-mail ou senha incorretos no processo de login ou signup.
<br>
- **102: Duplicate Data**
**Descrição:** O valor fornecido já existe no sistema e não pode ser registrado novamente. Usado, por exemplo, para indicar que o e-mail informado já está registrado.
    - **Campos adicionais:** `type` especifica o tipo de dado duplicado (ex: "Email", "Username").
    <br>
- **103: Operation Failed**
**Descrição:** Um erro genérico ocorreu no servidor durante o processamento da requisição. Isso pode ser devido a falhas internas, como problemas no banco de dados ou serviços auxiliares (ex: Redis, Nodemailer).
<br>
- **104: Token Expired**
 **Descrição:** O token fornecido para autenticação ou validação expirou. Normalmente usado em rotas que requerem tokens JWT para verificar a autenticidade ou validade de uma sessão.
 <br>
- **300: Invalid JSON Format**
 **Descrição:** O formato do JSON enviado na requisição está inválido. A API não conseguiu processar a entrada devido a problemas de formatação (como chaves faltando ou malformadas).

---
