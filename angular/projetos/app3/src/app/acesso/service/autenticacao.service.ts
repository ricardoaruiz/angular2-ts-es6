import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

import { Usuario } from '../model/usuario.model';
import { Observable } from 'rxjs/Observable';
import { reject } from 'q';

@Injectable()
export class AutenticacaoService {

  // Token retornado pela autenticação
  public tokenId: string;

  constructor() { }

  /**
   * Realiza o cadastro de um novo usuário no Firebase.
   * 
   * @param usuario 
   */
  public cadastrarUsuario(usuario: Usuario): Promise<any> {
    console.log('Chegamos até o serviço ',usuario);    

    //Criando um usuário no Authentication do Firebase
    return firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
      .then( (resposta: any) => {

        //remover a senha do atributo senha do objeto usuário
        delete usuario.senha;

        //path usuario_detalhe/<email do usuario>
        //Não pode ter caracter especial nos nós do firebase
        //então vamos criptografar o email com a funcao "btoa" (atob volta a criptografia)
        firebase.database()
          .ref(`usuario_detalhe/${btoa(usuario.email)}`)
            .set(usuario)
              .catch( (erro: Error) => {
                console.log('Erro ao criar os dados do usuário Database', erro);
              })

      })
      .catch( (erro: Error) => {
        console.log('Erro ao criar o usuário Auth', erro);
      })
  }

  /**
   * Realiza a autenticação do usuário no Firebase.
   * @param usuario 
   */
  public autenticar(usuario: Usuario): Promise<string> {
    let promise: Promise<string>;

    return new Promise<string>( (resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(usuario.email, usuario.senha)
        .then( (resposta: firebase.User) => {
          firebase.auth().currentUser.getIdToken()
            .then( (idToken: string) => {
              this.tokenId = idToken;
              resolve(this.tokenId);
            })
            .catch( (erro: firebase.FirebaseError) => {
              reject(erro.message);
            })
        })
        .catch( (erro: firebase.FirebaseError) => {
          reject(erro.code);
        })
    })
  }

}
