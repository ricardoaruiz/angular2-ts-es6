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

**Introdução, instalação e testes do pacote json-server**

- Documentação
    https://github.com/typicode/json-server

- Instalação
    `npm install -g json-server`

- Execução
    `json-server --watch banco-de-dados.json`

- Fonte de dados a ser utilizado com o json-server
Para a fonte de dados das ofertas, utilizar o arquivo 'banco-de-dados.json' que está na pasta
'arquivos/app2'

**App2 - Criando as páginas Restaurantes e Diversão**

O arquivo componentes.zip tem o html e o css para as páginas de Restaurantes e de Diversão.
Após criar os componentes, substituir os arquivos html e css pelos existentes no componentes.zip

**App2 - Criando o mapa de rotas**

Criamos o arquivo 'app.routes.ts' onde exportamos todas as rotas.

No arquivo 'app.module.ts' importamos o modulo "RouterModule" e as rotas criadas acima
e em seguida dissemos para o RouterModule carregar as rotas com "forRoot" (rotas principais).

No arquivo 'app.component.html', inserimos a tag `<router-outlet></router-outlet>` para mostrar
para o sistema de rotas onde os componentes devem ser renderizados.

**App2 - Estabelecendo a navegação entre rotas**

Para estabelecer a navegação a partir de um link utilizamos a propriedade "routerLink" conforme exemplos abaixo:

`<a class="nav-link active" [routerLink]="['/restaurantes']">Restaurantes</a>`

`<a class="nav-link" routerLink="/diversao">Diversão</a>`

**App2 - Alterando a classe do elemento associado a rota ativa**

Para fazer o destaque do elemento que está associado a rota ativa é só utilizar a propriedade
routerLinkActive conforme exemplos abaixo:
`<a class="nav-link" routerLinkActive="active" [routerLink]="['/restaurantes']">Restaurantes</a>`

`<a class="nav-link" routerLinkActive="active" routerLink="/diversao">Diversão</a>`

**App2 - Criando e navegando para a página Oferta**

O arquivo 'arquivos\app2\oferta.zip' possui o html e o css do componente de Oferta.

**App2 - Introdução a Reactive Programming**

Dar uma olhada no manifesto de programação reativa em:

    https://www.reactivemanifesto.org/pt-BR

**Observables na prática parte 2 - Interval operator**

    Documentação do RXJS:  http://reactivex.io/

**Ajustando a formatação de moedas para o padrão Brasileiro (internacionalização)**

    Instalar o pacote Intl para poder realizar a internacionalização dos dados a partir do seguinte comando: 
        `npm install --save intl`

    Adicionar as entradas abaixo no plyfills.ts:
        `import 'intl'`
        `import 'intl/locale-data/jsonp/pt-BR';`

    Adicionar as entradas abaixo no app.module.ts (modulo a usar a internacionalização):
        import { NgModule, LOCALE_ID } from '@angular/core';
        import { registerLocaleData } from '@angular/common';
        import localePt from '@angular/common/locales/pt';
        registerLocaleData(localePt);

    Nos metadados do app.module.ts, adicionar como provider o objeto literal abaixo:
        `{ 
            provide: LOCALE_ID, 
            useValue: 'pt-BR'
        }`

**App2 - Atualizando a versão do Bootstrap de alpha para beta**

    `npm unistall bootstrap` - para remover a biblioteca em uso no momento
    `npm install --save bootstrap@4.0.0-beta`

    `npm uninstall tether` - remover o tether, pois na versão beta não é mais utilizado
    `npm install --save popper.js` - agora a versão beta passou a usar o popper

    Remover a dependencia do tether no arquivo .angular.cli.json
    Adicionar a dependencia do popper no arquivo .angular.cli.json conforme abaixo:
    
        `../node_modules/popper.js/dist/umd/popper.min.js`

**App2 - Feedback parte1 - Criando componente OrdemCompraSucesso**

    O arquivo '/aquivos/app2/ordem-compra-sucesso.componente.zip' contém o html do 
    componente

**App2 - Ajustando as coisas antes de iniciar com Template Forms**

    Como já desenvolvemos o formulário de pedidos baseado na estratégia de "Databinding" e agora vamos para a estratégia de "TemplateForms", devemos substituir a classe do componente e o template do componente "ordem-compra" pelo conteúdo do arquivo "arquivos/app2/ordem-compra-template-forms.zip" para que voltemos a ter um html estático
    e possamos aplicar a nova técnica.

**App2 - Ajustando as coisas antes de iniciar com Reactive Forms**

    Como já desenvolvemos o formulário de pedidos baseado na estratégia de "TemplateForms" e agora vamos para a estratégia de "ReactiveForms", devemos substituir a classe do componente e o template do componente "ordem-compra" pelo conteúdo do arquivo "arquivos/app2/ordem-compra.reactive-formst.zip" para que voltemos a ter um html estático
    e possamos aplicar a nova técnica.

**App2 - Deploy local via http-server**

    Para instalar o http-server, rodar o comando abaixo:
        `npm install -g http-server`

    Sua documentação encontra-se em https://www.npmjs.com/package/http-server

    Para subir a aplicação, basta ir na linha de comando, navegar até o diretório de distribuição da aplicação e digitar `http-server`

=====================================================================
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
