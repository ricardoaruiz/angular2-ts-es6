- Projeto app1 - primeiro projeto do treinamento
    - foi criado utilizando o ng cli com o seguinte comando:
        estando dentro da pasta projetos foi executado:
            ng new app1

    - **App1** - Criando o componente Topo manualmente

        - O componente foi criado não utilizando a linha de comando do 'ng cli'.

          - Foi criado o diretório 'topo' dentro de 'app' e dois arquivos que são:
          'topo.component.ts' e 'topo.component.html'

          - O arquivo 'topo.component.ts' é o controller da view e o 'topo.component.html'
          é a view

          - Ao definir um componente utilizamos a anotação @Component que recebe como parâmetro
            um objeto javascript literal com algumas informações:

            - **selector** - define a tag que deve ser utilizada no template para               renderizar o componente.
                Este parâmetro pode ser definido de três formas:

                    - selector: 'app-topo' - desta forma deve ser utilizado como um elemento     no HTML. Ex: <app-topo></app-topo>

                    - selector: ['app-topo'] - desta forma deve ser utilizado como uma atributo
                      de um elemento HTML. Ex: <div app-topo></div>

                    - selector: '.app-topo' - desta forma deve ser utilizado como uma classe
                      css de um elemtnto HTML. Ex: <div class="app-topo"></div>

            - **templateUrl** - define o caminho do arquivo html (view) do componente

            - **template** - define o html (código) que definirá o componente (nesse caso não é
              definido um arquivo externo)
                Este parâmetro pode ser definido de duas formas:

                    - template: '<p>Teste</p>' (com aspas simples não podendo pular linhas)

                    - template: `<p>
                                    Teste
                                </p>` (com crase 'template string' e nesse caso podemos pular linhas)

            - **styleUrl** - define um array com os caminhos dos arquivos de estilos do            componente.
                styleUrl: ['./topo.component.css']

            - **styles** - define um array com os estilos do componente
                Este parâmetro pode ser definido de duas formas:

                    - style: ['.exemplo {color:red;}'] (com aspas simples não podendo pular      linhas)

                    - style: [`  .exemplo: {
                                  color:red;
                                }     
                            `] (com crase 'template string' e nesse caso podemos pular linhas)