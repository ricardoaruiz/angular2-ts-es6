import { Injectable } from '@angular/core';

import * as firebase from 'firebase';

@Injectable()
export class BdService {

  constructor() { }

  public publicar(publicacao: any): void {
    console.log('Service', publicacao);
    
    let nomeImagem = Date.now();

    //Faz o upload da imagem selecionada para o storage do Firebase
    //nesse exemplo assumimos que o nome da imagem armazenada será o 
    //timestamp do momento do upload.
    firebase.storage()
      .ref()
        .child(`imagens/${nomeImagem}`)
          .put(publicacao.imagem)
            // Método on para ficar escutando um evento do firebase
            //nesse caso estamos escutando o evento "firebase.storage.TaskEvent.STATE_CHANGED"
            .on(firebase.storage.TaskEvent.STATE_CHANGED,
              //acompanhamento do progresso do upload
              ( snapshot: any ) => {
                console.log('Acompanhamento do upload:', snapshot);
              },
              //tratamento de erro
              ( erro: Error) => {
                console.log(erro)
              },
              //executado na finalização do upload
              () => {
                console.log('Upload completo');                
              }
            )
          

    // Utilizamos a função btoa para transformar o email do usuário para a base64
    //pois os nós do firebase não aceitam caracteres especiais exemplo: @
    //Utilizamos o método push do database do firebase que permite inserir várias
    //itens para o nó informado.
    firebase.database()
      .ref(`publicacoes/${btoa(publicacao.email)}`)
        .push({
          titulo: publicacao.titulo

        })
  }

}
