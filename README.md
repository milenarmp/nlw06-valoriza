# NLW Valoriza

## Como rodar a aplicação (apenas em dev)?
- Pré-requisitos:
    - Node
    - Yarn
    - Insomnia

- 1º passo: Clonar repositório
- 2º passo: Abrir um terminal e digitar o comando "yarn" na raiz do projeto para instalar dependências.
- 3º passo: Digitar o comando "yarn typeorm migration:run" para criar as tabelas do banco de dados através do cliente do TypeORM.
- 4º passo: Importar a coleção de requests disponíveis no arquivo do Insomnia.
- 5º passo: Brincar com as rotas! =)

## Regras de negócio
- Cadastro de usuário

    [ X ] Não é permitido cadastar mais de um usuário com o mesmo e-mail.

    [ X ] Não é permitido cadastrar usuário sem e-mail.

- Cadastro de TAG

    [ X ] Não é permitido cadastrar mais de uma tag com o mesmo nome.

    [ X ] Não é permitido cadastrar tag sem nome.

    [ X ] Não é permitido o cadastro por usuários que não sejam administradores.

- Cadastro de elogios

    [ X ] Não é permitido um usuário cadastrar um elogio para si.

    [ X ] Não é permitido cadastrar elogios para usuários inválidos.

    [ X ] O usuário precisa estar autenticado na aplicação.
