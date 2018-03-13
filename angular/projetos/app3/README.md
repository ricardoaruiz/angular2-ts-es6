**App3-Iniciando o projeto Instagram Clone**
    `ng new app3`

**App3-Instalando o Bootstrap, JQuery e Popper no projeto**
    `npm install --save bootstrap jquery popper.js`

**App3-Criando os componentes Acesso, Banner, Login e Cadastro**
    `ng g c acesso`
    `ng g c acesso/banner`
    `ng g c acesso/cadastro`
    `ng g c acesso/login`

**App3-Ajustando os componentes AppComponente e AcessoComponent**
    Utilizar o arquivo "arquivos/ajustando-appComponent-acessoComponent.zip" para ter a parte visual do componente acesso já pronto.

**App3-Ajustando o componente Banner**
    Utilizar o arquivo "arquivos/ajustando-banner.zip" para ter a parte visual do componente banner já pronto.

**App3-Ajustando o componente Login**
    Utilizar o arquivo "arquivos/ajustando-login.zip" para ter a parte visual do componente login já pronto.

**App3-Ajustando o componente Cadstro**
    Utilizar o arquivo "arquivos/ajustando-cadastro.zip" para ter a parte visual do componente cadastro já pronto.

**App3-Criando e alterando o favicon**
    Utilizar os arquivos "arquivos/icone.png" e "arquivos/alterando-favicon.zip" para ter a parte visual do componente cadastro já pronto.

    Utilizar o site "https://www.favicon-generator.org/" para gerar o favicon

**App3-Instalação e setup do módulo de animações do Angular 4 + web-animations-js**
    Rodar os dois comandos abaixo:

    `npm install --save @angular/animations`
    `npm install --save web-animations-js`

    - Em 'app.module' importar o seguinte módulo:

        `import { BrowserAnimationsModule } from '@angular/platform-browser/animations'`

    - Colocar o módulo no metadado imports dessa mesma classe.

    - No arquivo polyfills acrescentar a biblioteca web-animations-js, fazer um find no arquivo por "animations" e será encontrado um trecho já comentado.
    Descomentar o trecho e ajustar para que fique da seguinte forma:
    
        `import 'web-animations-js/web-animations.min.js'`

**App3-Animations, triggers, states e styles**    
    O arquivo 'animations-triggers-state-styles.zip' contém as imagens que serão utilizadas e devem ser colocadas dentro de 'assets/banner'

**App3-Incluindo o Firebase SDK no projeto**
    `npm install --save firebase`

# App3

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

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
