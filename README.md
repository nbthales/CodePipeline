# CodePipeline - AWS CDK TypeScript

Esse projeto tem o objetivo de construir e manter a infraestrutura dos recursos AWS.

## Diagrama da Arquitetura

<p align="center"><img src="./docs/diagrama.png"></p>

## Comandos úteis

- `aws configure` configurações que a AWS Command Line Interface (AWS CLI) usa para interagir com a AWS
- `npm install` instalação de pacotes, gerenciamento da versões e gerenciamento de dependências necessárias
- `cdk bootstrap --trust 670951049310 --cloudformation-execution-policies arn:aws:iam::aws:policy/AdministratorAccess aws://869397599638/us-east-1` permitindo acesso de uma conta à outra para provisionar pilha de bootstrap no ambiente da AWS usando um template moderno

## Apresentação

- [Google Drive](https://docs.google.com/presentation/d/1GraoJJ0YqJEDcV727Tz2rkd0Kk5_1wuXmod9RLrfvK0/edit?usp=sharing)

## Configuração

### Gerar token no GitHub que será utilizado pela AWS ter direito de acesso ao repositório.

Profile > Settings

<p align="center"><img src="./docs/githubSettings.png"></p>
> Developer settings
<p align="center"><img src="./docs/githubDeveloperSettings.png"></p>
> Personal access tokens > Tokens (classic) > Generate new token
<p align="center"><img src="./docs/githubToken.png"></p>
> Crie o token preenchendo o campo do nome, expiração e selecione 2 escopos: "admin:repo_hook" e "repo".
<p align="center"><img src="./docs/githubNewToken.png"></p>
> Guarde o segredo gerado conforme abaixo, ele sera guardado na AWS.
<p align="center"><img src="./docs/githubGenerateToken.png"></p>

### Guardando o segredo gerado do GitHub na AWS.

Abra o serviço Secrets Manager da conta de gerenciamento da AWS.<br>
AWS Secrets Manager > Segredos > Armazenar um novo segredo

<p align="center"><img src="./docs/awsNovoSegredo.png"></p>
Tipo de segredo > Outro tipo de segredo
<p align="center"><img src="./docs/awsTipoSegredo.png"></p>
Pares de chave/valor > Texto Simples > Colar o segredo gerado do GitHub
<p align="center"><img src="./docs/awsTextoSimples.png"></p>

Próximo > Nome do Segredo: github-token > Próximo > Armazenar
