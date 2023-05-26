# Requisitos para o projeto

- Node.js
- NPM
- Docker
- Docker Compose
- Java 17

# Como rodar o projeto

- Clone o repositório
- Entre na pasta do projeto
- Execute o comando `docker-compose up -d` para subir o banco de dados
- Entre na pasta `/frontend`
- Execute o comando `npm install`
- Execute o comando `npm run dev` para deixar o frontend disponivel em `localhost:5173`
- Abra outro terminal
- Entre na pasta `/simplify.task-manager`
- Importe o projeto como mavem no seu IDE e execute a classe `SimplifyTaskManagerApplication.java` ou execute o comando `mvnw spring-boot:run`

# Como usar o projeto
Para utilizar as funcionalidades basta acessar o frontend através de um browser no endereço `localhost:5173`.

- Criar nova tarefa: Para criar uma nova tarefa basta clicar no botão `Adicionar nova Tarefa` e preencher o campo `Nome` e clicar no botão `Salvar`.
- Criar nova Prioridade: Para criar uma prioridade, é preciso clicar no botão `+` dentro do formulário de uma nova tarefa, preencher o campo `Nome` como desejado e escolher uma cor no campo `Cor` (a cor tem um formato hexadecimal, por exemplo: `#FFFFFF`). Após isso, basta clicar no botão `Salvar`.
- Editar uma tarefa: Para editar uma tarefa, basta clicar no botão com icone de lápis na linha da tarefa desejada, preencher os campos como desejado e clicar no botão `Salvar`.
- Excluir uma tarefa: Para excluir uma tarefa, basta clicar no botão com icone de lixeira na linha da tarefa desejada.
