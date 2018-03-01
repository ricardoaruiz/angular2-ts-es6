# App2

- Link da app no AWS: http://ralmendror-passaro-urbano.s3-website-sa-east-1.amazonaws.com/

**App2 - Iniciando o projeto e entendendo a flag --prefix**

O projeto App2 (Pássaro Urbano) foi criando utilizando o seguinte comando:
    `ng new -p xyz` - esse comando além de criar o projeto faz a definição
    do prefixo das tags dos componentes que serão criados nesse projeto.

   - No arquivo '.angular.cli.json' a propriedade prefix foi definida como 'xyz'
    e o arquivo 'app.component.ts' teve o seu selector definido baseado nesse 
    prefixo: selector: 'app-root',

   - Isso foi feito para mostrar que é possível mudar essa informação na criação
    do projeto, porém, voltamos tudo para a configuração padrão com o prefixo 'app'

**App2 - Instalando o Bootstrap, JQuery e Tether**

Vamos instalar o Bootstrap na versão 4 com o seguinte comando:    
    `npm install --save bootstrap@4.0.0-alpha.6`

Vamos instalar o JQuery na última versão com o seguinte comando:
    `npm install --save jquery`

Vamos instalar o Tether na última versão com o seguinte comando:
    `npm install --save tether`

   O Tether é um framework para fazer tutoriais de apresentação da app

Após fazer a instalação das bibliotecas será necessário fazer suas importações
no arquivo .angular.cli.json da seguinte forma:

    `"styles": [
        "styles.css",
        "../node_modules/bootstrap/dist/css/bootstrap.min.css"
      ],
      "scripts": [
        "../node_modules/jquery/dist/jquery.min.js",
        "../node_modules/tether/dist/js/tether.min.js",
        "../node_modules/bootstrap/dist/js/bootstrap.min.js"
      ],`

**App2 - Criando os componentes Topo, Home e Rodape**

Foram criados os três componentes (Topo, Home e Rodape) utilizando o comando:
    `ng g c topo`, `ng g c home` e `ng g c rodape` com isso os tres componentes foram criados.

Em seguida ir no arquivo 'app.component.html' e instanciar os componentes criados da seguinte forma:
    `<app-topo></app-topo>`
    `<app-home></app-home>`
    `<app-rodape></app-rodape>`

Ir na pasta 'arquivos/app2' e descompactar o arquivo 'arquivos-necessarios.zip' e copiar todos os arquivos existentes para seus respectivos locais no projeto. Isso é feito para adiantar a parte
do layout das páginas.

**App2 - Criando e alterando o favicon**

Ir até a url: https://www.favicon-generator.org/ e carregar o arquivo icone.png da pasta
arquivos/app2 e gerar todos os icones.

Fazer o download dos arquivo gerados e colocar em uma pasta 'ico' dentro de assets
Copiar o código gerado no site de geração do ícone e colocar na index.html mudando
o src para pegar de '/assets/icon/...'

**App2 - Exibindo ofertas com base no serviço OfertasService parte 1**

Utilizar o arquivo 'dados-de-suporte-para-ofertas.txt' existente em 'arquivos/app2' para ver
a estrutura de uma oferta bem como já usar para os dados mockados.


=========================================================================
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