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
