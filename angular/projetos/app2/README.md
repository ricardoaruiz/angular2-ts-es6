# App2

O projeto App2 (Pássaro Urbano) foi criando utilizando o seguinte comando:
    `ng new -p xyz` - esse comando além de criar o projeto faz a definição
    do prefixo das tags dos componentes que serão criados nesse projeto.

    No arquivo '.angular.cli.json' a propriedade prefix foi definida como 'xyz'
    e o arquivo 'app.component.ts' teve o seu selector definido baseado nesse 
    prefixo: selector: 'app-root',

    Isso foi feito para mostrar que é possível mudar essa informação na criação
    do projeto, porém, voltamos tudo para a configuração padrão com o prefixo 'app'

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
