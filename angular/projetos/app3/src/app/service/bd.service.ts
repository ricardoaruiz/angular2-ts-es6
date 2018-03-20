import { Injectable } from '@angular/core';

import * as firebase from 'firebase';

import { ProgressoService } from './progresso.service';
import { Usuario } from '../acesso/model/usuario.model';

@Injectable()
export class BdService {

  constructor(
    private progressoService: ProgressoService
  ) { }

  /**
   * Faz uma nova publicação
   * @param publicacao
   */
  public publicar(publicacao: any): void {
    this.salvarPostagem(publicacao);          
  }

  /**
   * Faz uma consulta na base de dados do firebase no recurso de publicações
   * @param email
   */
  public consultaPublicacoes(email: string): Promise<any> {
    
    return new Promise( (resolve, reject) => {

      firebase.database()
      .ref(`publicacoes/${btoa(email)}`)
        .orderByKey()
        .once('value')
          .then( (snapshot: firebase.database.DataSnapshot) => {            

            let publicacoes: Array<any> = [];
             snapshot.forEach( (childSnapshot: firebase.database.DataSnapshot) => {
                let publicacao = childSnapshot.val();
                publicacao.key = childSnapshot.key;
                publicacoes.push(publicacao);
                return false;
             })

             //Esse return disponibilizou o array para o próximi then
             return publicacoes.reverse();

          })
          .then((publicacoes: any[]) => {

            publicacoes.forEach( (publicacao: any) => {

            // Busca os dados da imagem para ser exibida na timeline
            firebase.storage().ref()
            .child(`imagens/${publicacao.key}`)
              .getDownloadURL()
                .then( (url: string) => {
                  publicacao.url_imagem = url; 
      
                  //consultar o nome do usuario
                  firebase.database().ref(`usuario_detalhe/${btoa(email)}`)
                  .once('value')
                    .then( (snapshot: firebase.database.DataSnapshot) => {
                      publicacao.nome_usuario = snapshot.val().nomeCompleto;
                  })
              })                  
            })

            resolve(publicacoes);

          });

    })

    
  }

  /** 
  * Utilizamos a função btoa para transformar o email do usuário para a base64
  * pois os nós do firebase não aceitam caracteres especiais exemplo: @
  * Utilizamos o método push do database do firebase que permite inserir várias
  * itens para o nó informado.
  */
  private salvarPostagem(publicacao: any): void {
    firebase.database()
      .ref(`publicacoes/${btoa(publicacao.email)}`)
        .push({
          titulo: publicacao.titulo
        })
        .then( (resposta: firebase.database.ThenableReference) => {
          this.uploadImagem(publicacao.imagem, resposta.key)
        })
  }

  /** 
  * Faz o upload da imagem selecionada para o storage do Firebase
  * nesse exemplo assumimos que o nome da imagem armazenada será o 
  * timestamp do momento do upload.
  */
  private uploadImagem(imagem: any, key: string): void {
    let nomeImagem = key;

    firebase.storage()
      .ref()
        .child(`imagens/${nomeImagem}`)
          .put(imagem)
            // Método (Listener) on para ficar escutando um evento do firebase
            //nesse caso estamos escutando o evento "firebase.storage.TaskEvent.STATE_CHANGED"
            .on(firebase.storage.TaskEvent.STATE_CHANGED,
              //acompanhamento do progresso do upload
              ( snapshot: any ) => {
                this.progressoService.status = ProgressoService.STATUS.ANDAMENTO
                this.progressoService.estado = snapshot;
              },
              //tratamento de erro
              ( erro: Error) => {
                this.progressoService.status = ProgressoService.STATUS.ERRO
              },
              //executado na finalização do upload
              () => {
                this.progressoService.status = ProgressoService.STATUS.CONCLUIDO
              }
            )
  }

}
