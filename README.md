# My First Project Angular

O que é o angular ?

Framework criado pelo google focado na criação de aplicativos de página única eficientes e sofisticados.

<a href="https://angular.io/docs">Documento Oficial</a>

## Development server

O que é uma página SPA ?

Um SPA é uma aplicação web que roda em uma única página.

Fonte: <a href="https://angular.io/docs">Artigo: O que é uma SPA: Single-Page Application</a>

## Objetivo

Aprender o que é o angular, para que serve e como construir uma aplicação inicial com angular e suas ferramentas.

## Instalação angular CLI.

npm install -g @angular/cli

## Como inicializar a sua aplicação.

ng new my-first-project
cd my-first-project
ng serve

## Como compilar sua aplicacao para publicacao.
Execute ng build para construir o projeto. Os artefatos de construção serão armazenados no diretório dist/.

## Executando testes de unidade

Execute ng test para executar os testes de unidade via [Karma] (https://karma-runner.github.io).

## Executando testes ponta a ponta (End-to-End)
Execute ng e2e para executar os testes de ponta a ponta por meio de uma plataforma de sua escolha. Para usar este comando, você precisa primeiro adicionar um pacote que implemente recursos de teste de ponta a ponta(End-to-End).

## Comandos úteis angular CLI
Scaffold: ..........................            Usage:

Componet =  ng g component my-new-component

Directive = ng g directive my-new-directive

Pipe =      ng g pipe my-new-pipe

Service =   ng g service my-new-service

Class =     ng g class my-new-class

Guard =     ng g guardmy-new-guard

interface = ng g interface my-new-interface

Enum =      ng g enum my-new-enum

Module =    ng g module my-module

