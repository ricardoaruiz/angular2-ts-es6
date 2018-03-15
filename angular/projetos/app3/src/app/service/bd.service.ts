import { Injectable } from '@angular/core';

import * as firebase from 'firebase';

import { ProgressoService } from './progresso.service';

@Injectable()
export class BdService {

  constructor(
    private progressoService: ProgressoService
  ) { }

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
            // Método (Listener) on para ficar escutando um evento do firebase
            //nesse caso estamos escutando o evento "firebase.storage.TaskEvent.STATE_CHANGED"
            .on(firebase.storage.TaskEvent.STATE_CHANGED,
              //acompanhamento do progresso do upload
              ( snapshot: any ) => {
                this.progressoService.status = 'andamento'
                this.progressoService.estado = snapshot;
                console.log('Snapshot capturado no on()', snapshot);
              },
              //tratamento de erro
              ( erro: Error) => {
                this.progressoService.status = 'erro'
              },
              //executado na finalização do upload
              () => {
                this.progressoService.status = 'concluido'
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
