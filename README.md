# ClimaTempo
Uma API para visualizar o clima na sua, ou qualquer cidade em tempo real.

Link para utilização: http://54.242.154.207:3000/

## 🔧 Pré-requisitos para instalação
Obtenha uma chave da API ao se registrar em https://weatherstack.com/

Ter o Docker-Desktop.


## 💾 Instalação
Siga os passos abaixo:
1. Clone o repositório na sua máquina;
2. Configure um arquivo .env com a chave da API;
```
    WEATHESTACK_API_KEY=SUA-CHAVE
```
3. Faça o Pull: docker pull devjohnathan/clima-tempo-equipe1:latest;
4. Verifique se a imagem está no seu repositório local: docker images;
5. Inicie a imagem: docker run -p 3000:3000 -d devjohnathan/clima-tempo-equipe1:latest;
6. Acesse no navegador: localhost:3000.

---
---

## ⌨️ Estrutura do projeto

---
---
O conteúdo da pasta importada deve ser parecido com a descrição abaixo:

- **src/**: Contém a pasta código-fonte do nosso projeto, além da pasta de arquivos estáticos.
  - **assets/**: Contém as imagens utilizadas no readme.
      - **Cidade-encontrada.png**: Resultado quando encontra uma cidade.    
      - **Cidade-nao-encontrada.png**: Resultado quando falhar em encontrar uma cidade. 
      - **Erro**: Nome de cidade inválido.    
      - **Tela-inicial**: Tela inicial da aplicação.
  - **routes/**: Pasta contendo as rotas.
      - **index.js**: Código com as funções das rotas para acessar a API.
  - **views/**: Pasta contendo as telas da aplicação.
      - **layouts/**: Contém a tela do cabeçalho e rodapé.
        - **layout.handlebars**: Layout do cabeçalho e rodapé da aplicação.
      - **details.handlebars**: Contém a tela de detalhes do clima.
      - **error.handlebars**: Contém a tela de tratamento de erro.
      - **index.handlebars**: Contém a tela de pesquisa.    
  - **app.js**: Código-fonte principal do sistema.

- **.dockerignore**: Ignora extensões, logs e arquivos temporários.
- **.env**: Contém a pasta código-fonte do nosso projeto, além da pasta de arquivos.
- **.gitignore**:  Contém os padrões de arquivos que vão ser ignorados.
- **Dockerfile**: dependências que serão enviadas ao container.
- **Dockerfile-nginx**: Conteúdo a ser enviado para o registro AWS.
- **package-lock.json**: Contéudo da extensão Node.
- **package.json**: informações do repositório e dependências.
- **README.md**: Arquivo com a descrição do projeto.

---
---

## 	🔜 Desenvolvimento
Foi utilizado a metodologia ágil Kanban para visualização, divisão e trabalho das tarefas.
![badge kan](./src/assets/Kanban.png)

## 📱Utilizando a aplicação
### Tela inicial
![badge telaI](./src/assets/Tela-inicial.png)
Ao acessar a página inicial o usuário encontra um painel descritivo com a identificação de pesquisar clima, um input com texto exemplo "São Paulo" e logo abaixo um botão em destaque azul para realizar a pesquisa.
### Buscando cidade
![badge cidadeOK](./src/assets/Cidade-encontrada.png)
Caso a cidade seja encontrada na pesquisa, é retornado o nome da cidade, estado e país. Condição do clima de acordo com o fuso local e outras informações relevantes de tempo.

## 🐛 Tratamento de Erros
### Entrada de texto inválida
Através do uso de Regex o usuário recebe mensagem de erro ao inserir um texto com caracteres não alfabéticos.
![badge erro](./src/assets/Erro.png)

### Cidade não encontrada
Retorno caso não seja possível encontrar a cidade pesquisada dentro da base de dados da API.
![badge cidadeERR](./src/assets/Cidade-nao-encontrada.png)
## 🛠️ Construído com
![badge html](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![badge css](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![badge BootStrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![badge js](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![badge nodejs](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![badge aws](https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)
## 👨🏻‍💻 Equipe de Desenvolvedores
- Douglas Ramos Martins
- Johathan Rafael Santos Borba
- Palloma Barros Dias
- Ramon Cesar Peixe

## 📢 Dificuldades e Considerações Finais
- Subir o container na AWS.
- Requisição a API utilizando arquivo .env, quanto à necessidade de instalação específica de dependências dotenv.
- Tratamento de erros, definir tratamento adequado para identificação de erro.
- Uso do repositório dockerhub com problemas de permissão mesmo estando logado.

## 📝Licença
Livre para acesso, uso, melhoria e replicação. 
