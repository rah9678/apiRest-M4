# API de Referências de Pessoas Negras

## Descrição

Esta API foi desenvolvida para centralizar e disseminar informações sobre figuras negras notáveis que fizeram grandes contribuições em diversas áreas, tanto no Brasil quanto no mundo. A API visa proporcionar fácil acesso a essas informações, promovendo a inclusão e celebrando a diversidade.

## Endpoints

### 1. Buscar Todas as Referências

- **Método:** `GET`
URL:**- ** `/search`
- **Descrição:** Retorna todas as referências cadastradas.
- **Resposta:**
  ```json
  {
    "result": [
      {
        "id": "string",
        "name": "string",
        "biography": "string",
        "category": "string",
        "photo_url": "string"
      }
    ]
  }
### 2. Buscar Referência pelo Nome
- **Método:** `GET`
URL:**- ** `/searchByName/:name`
- **Descrição:** Busca uma referência pelo nome.
- **Parâmetros da URL:** name (string)  Nome da referência
- **Resposta:**
  ```json
{
  "reference":"result":{
    "id": "string",
    "name": "string",
    "biography": "string",
    "category": "string",
    "photo_url": "string"
  }
}
### 4. Criar Referência
- **Método:** `POST`
URL:**- ** `/createreference`
- **Descrição:**  Cria uma nova referência.
- **Body da Requisição:**
- **Resposta:**
  ```json
{
  "id": "string",
  "name": "string",
  "biography": "string",
  "category": "string",
  "photo_url": "string"
}
**Resposta:**
```json

{
  "message": "Sucesso"
}
### 4. Atualizar Referência
- **Método:** PATCH`
- **URL: ** `/updatereference``
- **Descrição:** Atualiza uma referência existente.
- **Body da Requisição:**
{
  "id": "string",
  "name": "string"
}

{
  "referenceUpdate": {
    "id": "string",
    "name": "string",
    "biography": "string",
    "category": "string",
    "photo_url": "string"
  }
}
````
- ### 5. Deletar Referência
- **Método:** DELETE
- **URL: ** /deletereference/:id
- **Descrição:** Deleta uma referência pelo ID.
**Parâmetros da URL:**id (string) – ID da referência a ser deletada
- **Resposta:**
```json
{
  "reference": {
    "id": "string",
    "name": "string",
    "biography": "string",
    "category": "string",
    "photo_url": "string"
  }
}

````
### 6. Buscar Referências em Ordem Alfabética
- **Método:** `GET`
- **URL:** /sorted
- **Descrição:** Retorna todas as referências ordenadas por nome em ordem alfabética.
**Resposta:**
  ```json
{
  "sortedReferences": {
    "id": "string",
    "name": "string",
    "biography": "string",
    "category": "string",
    "photo_url": "string"
  }

}
