# **Projeto2-BKE-Blue** 

**Olá, este projeto consiste em desenvolver uma API com armazenamento em nuvem. Utilizando a Integração Backend + Mongo Atlas + Heroku.** 

**Onde existirão 3 rotas principais:** 

 **Rota Países.** 

 **Rota Estados.** 

 **Rota Cidades.**



 **Dentro de cada rota temos as seguintes sub-rotas:**

 `/add` 	**Cada uma das rotas principais tem o seu.**

 `/update ` 	**Cada uma das rotas principais tem o seu.**

`/delete`  	**Igual nas 3 rotas principais.**

`/listall ` 	 **Igual nas 3 rotas principais.**

`/listname`  	**Igual nas 3 rotas principais.**



**A rota pais  `/paises`**  **, necessita de:**

​				**`/add`** 

- ​	**Usado para adicionar um novo país ao banco de dados na nuvem.**

- ​    **Exemplo:**    `/paises/add`

- ​    **Para adicionar um país dentro do banco, necessita passar todos os dados com suas devidas informações a seguir:**

  ```javascript
  {
  	"nome": "Brasil", //(Type: String)
  	"populacao":  "212,6 milhões", //(Type: String)
  	"linguamae": "Português", //(Type: String)
  	"pib": "1,445 trilhão USD" //(Type: String)
  }
  ```

  

- ​    **Se for adicionado retornará um .json com uma mensagem de confirmação e um status 200.**

  ```javascript
  res.status(200).json({message: "Cadastrado com sucesso"});
  ```

  

- ​    **Caso contrário não for inserido no banco, retornará uma mensagem de erro e um status 400.**

  ```javascript
  res.status(400).json({message: "Algo esta errado"});
  ```



​				**`/listall`** 

- ​	**Usado para visualizar todos os países cadastrados no banco.**

- ​    **Exemplo:**    `/paises/listall`

- ​	**Após ser executado, retornará um .json com todos os países INCLUINDO UM ID, cada país possui seu ID criado automaticamente pelo banco.**

  ```javascript
  {
      "_id": "6189d7fb374b2b5c405cf5c1",
      "nome": "Brasil",
      "populacao": "212,6 milhões",
      "linguamae": "Português",
      "pib": "1,445 trilhão USD",
      "dataCriacao": "2021-11-09T02:07:55.479Z",
      "__v": 0
  }
  ```

- **Caso não tenha nada cadastrado no banco, irá retornar um .json vazio.**

  ```javascript
  [];
  ```

  

​				**`/listname/:nome`** 

- ​	**/:nome  , Na url precisamos passar o nome do item que deseja visualizar.**  

  **Exemplo:**      `/paises/listname/Brasil`

  ```javascript
  {
    "_id": "6189d7fb374b2b5c405cf5c1",
    "nome": "Brasil",
    "populacao": "212,6 milhões",
    "linguamae": "Português",
    "pib": "1,445 trilhão USD",
    "dataCriacao": "2021-11-09T02:07:55.479Z",
    "__v": 0
  }
  ```

  

- ​	**Usado quando o usuário deseja achar um país específico usando apenas seu nome, sem necessitar de outras informações.**

- **Caso não exista nenhum país cadastrado no banco com o nome procurado, irá retornar um código de erro.**

  ```javascript
  res.status(204).json({message: "Nada foi encontrado"});
  ```



​			**`/update/:id`** 

- ​	**/:id  , Na url precisamos passar o id do item em que deseja atualizar, sendo esse FIXO, INALTERÁVEL**

  **Exemplo:**      `/paises/update/6189d7fb374b2b5c405cf5c1`

-    **Usado para atualizar informações já existentes no banco de dados na nuvem.**

- **Para atualizar esses dados é necessário passar todos os dados a seguir COM O ID FIXO (NÃO MUDA), porém com as novas informações que você deseja atualizar:**

  ```javascript
  {
  	"_id": "6189d7fb374b2b5c405cf5c1",
  	"nome": "", //(Type: String)
  	"populacao":  "", //(Type: String)
  	"linguamae": "", //(Type: String)
  	"pib": "" //(Type: String)
  }
  ```

  

- ​     **Se for atualizado retornará um .json com uma mensagem de confirmação e um status 200.**

  ```javascript
  res.status(200).json({message: "Atualizado com sucesso"});
  ```

- **Caso contrário não for atualizado no banco, retornará uma mensagem de erro e um status 400.**

  ```javascript
  res.status(400).json({message: "Algo esta errado"});
  ```

  

​		**`/delete/:id`** 

- ​	**/:id  , Na url precisamos passar o id do item em que deseja atualizar, sendo esse FIXO, INALTERÁVEL**

  **Exemplo:**      `/paises/delete/6189d7fb374b2b5c405cf5c1`

-    **Utilizamos o delete quando queremos remover algum país já cadastrado no banco.**

- **Caso o ID passado exista no banco, ele irá remove-lô do banco, ação irreversível e retornará uma mensagem de confirmação com o status 200.**

  ```javascript
  res.status(200).json({message: "Deletado com sucesso"});
  ```

  

- ​     **Porém se o ID passado na url não existir no banco, ele não irá achar nada para deletar assim retornando uma mensagem de erro com status 400.**

  ```javascript
  res.status(400).json({message: "Algo esta errado"});
  ```





**A rota estados  `/estados`**  **, necessita de:**

​				**`/add`** 

- **Exemplo:**    `/estados/add`

- ​	**Usado para adicionar um novo estado ao banco de dados na nuvem.**

- ​    **Para adicionar um estado dentro do banco, necessita passar todos os dados com suas devidas informações a seguir:**

  ```javascript
  {
  "nome": "São Paulo",
  "regiao": "Sudeste",
  "populacao":  "12,33 milhões",
  "valsalmin": "R$ 1.108,38"
  }
  ```

  

- ​    **Se for adicionado retornará um .json com uma mensagem de confirmação e um status 200.**

  ```javascript
  res.status(200).json({message: "Cadastrado com sucesso"});
  ```

  

- ​    **Caso contrário não for inserido no banco, retornará uma mensagem de erro e um status 400.**

  ```javascript
  res.status(400).json({message: "Algo esta errado"});
  ```



​				**`/listall`** 

- ​	**Usado para visualizar todos os países cadastrados no banco.**

- ​    **Exemplo:**    `/estados/listall`

- ​	**Após ser executado, retornará um .json com todos os países INCLUINDO UM ID, cada estado possui seu ID criado automaticamente pelo banco.**

  ```javascript
  {
      "_id": "6189d1efaf6fac25f2977dfb",
      "nome": "São Paulo",
      "regiao": "Sudeste",
      "populacao": "12,33 milhões",
      "valsalmin": "R$ 1.108,38",
      "dataCriacao": "2021-11-09T01:42:07.594Z",
      "__v": 0
    },
  ```

- **Caso não tenha nada cadastrado no banco, irá retornar um .json vazio.**

  ```javascript
  [];
  ```

  

​				**`/listname/:nome`** 

- ​	**/:nome  , Na url precisamos passar o nome do item que deseja visualizar.**  

  **Exemplo:**      `/estados/listname/São Paulo`

  ```javascript
  {
      "_id": "6189d1efaf6fac25f2977dfb",
      "nome": "São Paulo",
      "regiao": "Sudeste",
      "populacao": "12,33 milhões",
      "valsalmin": "R$ 1.108,38",
      "dataCriacao": "2021-11-09T01:42:07.594Z",
      "__v": 0
    },
  ```

  

- ​	**Usado quando o usuário deseja achar um país específico usando apenas seu nome, sem necessitar de outras informações.**

- **Caso não exista nenhum país cadastrado no banco com o nome procurado, irá retornar um código de erro.**

  ```javascript
  res.status(204).json({message: "Nada foi encontrado"});
  ```



​			**`/update/:id`** 

- ​	**/:id  , Na url precisamos passar o id do item em que deseja atualizar, sendo esse FIXO, INALTERÁVEL**

  **Exemplo:**      `/estados/update/6189d1efaf6fac25f2977dfb`

-    **Usado para atualizar informações já existentes no banco de dados na nuvem.**

- **Para atualizar esses dados é necessário passar todos os dados a seguir COM O ID FIXO (NÃO MUDA), porém com as novas informações que você deseja atualizar:**

  ```javascript
  {
  "_id": "6189d1efaf6fac25f2977dfb",
  "nome": "",
  "regiao": "",
  "populacao": "",
  "valsalmin": "",
  "dataCriacao": "2021-11-09T01:42:07.594Z",
  "__v": 0
  }
  ```

  

- ​     **Se for atualizado retornará um .json com uma mensagem de confirmação e um status 200.**

  ```javascript
  res.status(200).json({message: "Atualizado com sucesso"});
  ```

- **Caso contrário não for atualizado no banco, retornará uma mensagem de erro e um status 400.**

  ```javascript
  res.status(400).json({message: "Algo esta errado"});
  ```

  

​		**`/delete/:id`** 

- ​	**/:id  , Na url precisamos passar o id do item em que deseja atualizar, sendo esse FIXO, INALTERÁVEL**

  **Exemplo:**      `/estados/delete/6189d1efaf6fac25f2977dfb1`

-    **Utilizamos o delete quando queremos remover algum país já cadastrado no banco.**

- **Caso o ID passado exista no banco, ele irá remove-lô do banco, ação irreversível e retornará uma mensagem de confirmação com o status 200.**

  ```javascript
  res.status(200).json({message: "Deletado com sucesso"});
  ```

  

- ​     **Porém se o ID passado na url não existir no banco, ele não irá achar nada para deletar assim retornando uma mensagem de erro com status 400.**

  ```javascript
  res.status(400).json({message: "Algo esta errado"});
  ```





**A rota cidades  `/cidades`**  **, necessita de:**

​				**`/add`** 

- **Exemplo:**    `/cidades/add`

- ​	**Usado para adicionar uma nova cidade ao banco de dados na nuvem.**

- ​    **Para adicionar uma cidade dentro do banco, necessita passar todos os dados com suas devidas informações a seguir:**

  ```javascript
  {
  "nome": "Belo Horizonte",
  "populacao": "2,722 milhões ",
  "qntdbair":  487,
  "nivercidad": "12/12"
  },
  ```

  

- ​    **Se for adicionado retornará um .json com uma mensagem de confirmação e um status 200.**

  ```javascript
  res.status(200).json({message: "Cadastrado com sucesso"});
  ```

  

- ​    **Caso contrário não for inserido no banco, retornará uma mensagem de erro e um status 400.**

  ```javascript
  res.status(400).json({message: "Algo esta errado"});
  ```



​				**`/listall`** 

- ​	**Usado para visualizar todos os países cadastrados no banco.**

- ​    **Exemplo:**    `/cidades/listall`

- ​	**Após ser executado, retornará um .json com todos os países INCLUINDO UM ID, cada estado possui seu ID criado automaticamente pelo banco.**

  ```javascript
  {
      "_id": "6189d1acaf6fac25f2977df4",
      "nome": "Belo Horizonte",
      "populacao": "2,722 milhões ",
      "qntdbair": 487,
      "nivercidad": "12/12",
      "dataCriacao": "2021-11-09T01:41:00.667Z",
      "__v": 0
    }
  ```

- **Caso não tenha nada cadastrado no banco, irá retornar um .json vazio.**

  ```javascript
  [];
  ```

  

​				**`/listname/:nome`** 

- ​	**/:nome  , Na url precisamos passar o nome do item que deseja visualizar.**  

  **Exemplo:**      `/cidades/listname/Belo Horizonte`

  ```javascript
  {
      "_id": "6189d1acaf6fac25f2977df4",
      "nome": "Belo Horizonte",
      "populacao": "2,722 milhões ",
      "qntdbair": 487,
      "nivercidad": "12/12",
      "dataCriacao": "2021-11-09T01:41:00.667Z",
      "__v": 0
    }
  ```

  

- ​	**Usado quando o usuário deseja achar um país específico usando apenas seu nome, sem necessitar de outras informações.**

- ​    **Caso não exista nenhum país cadastrado no banco com o nome procurado, irá retornar um código de erro.**

  ```javascript
  res.status(204).json({message: "Nada foi encontrado"});
  ```



​			**`/update/:id`** 

- ​	**/:id  , Na url precisamos passar o id do item em que deseja atualizar, sendo esse FIXO, INALTERÁVEL**

  **Exemplo:**      `/cidades/update/6189d1acaf6fac25f2977df4`

-    **Usado para atualizar informações já existentes no banco de dados na nuvem.**

- **Para atualizar esses dados é necessário passar todos os dados a seguir COM O ID FIXO (NÃO MUDA), porém com as novas informações que você deseja atualizar:**

  ```javascript
  {
      "_id": "6189d1acaf6fac25f2977df4",
      "nome": "",
      "populacao": "",
      "qntdbair": ,
      "nivercidad": "",
      "dataCriacao": "2021-11-09T01:41:00.667Z",
      "__v": 0
    }
  ```

  

- ​     **Se for atualizado retornará um .json com uma mensagem de confirmação e um status 200.**

  ```javascript
  res.status(200).json({message: "Atualizado com sucesso"});
  ```

- **Caso contrário não for atualizado no banco, retornará uma mensagem de erro e um status 400.**

  ```javascript
  res.status(400).json({message: "Algo esta errado"});
  ```

  

​		**`/delete/:id`** 

- ​	**/:id  , Na url precisamos passar o id do item em que deseja atualizar, sendo esse FIXO, INALTERÁVEL**

  **Exemplo:**      `/estados/delete/6189d1acaf6fac25f2977df4`

-    **Utilizamos o delete quando queremos remover algum país já cadastrado no banco.**

- **Caso o ID passado exista no banco, ele irá remove-lô do banco, ação irreversível e retornará uma mensagem de confirmação com o status 200.**

  ```javascript
  res.status(200).json({message: "Deletado com sucesso"});
  ```

  

- ​     **Porém se o ID passado na url não existir no banco, ele não irá achar nada para deletar assim retornando uma mensagem de erro com status 400.**

  ```javascript
  res.status(400).json({message: "Algo esta errado"});
  ```

  