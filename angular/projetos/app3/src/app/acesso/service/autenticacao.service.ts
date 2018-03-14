import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import * as firebase from 'firebase';

import { Usuario } from '../model/usuario.model';
import { Observer } from 'rxjs/Observer';


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
  public cadastrarUsuario(usuario: Usuario): Observable<string> {
    console.log('Chegamos até o serviço ',usuario);    

    return new Observable<string>( (observer: Observer<string>) => {
      
      //Criando um usuário no Authentication do Firebase
      firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
      .then( (resposta: any) => {

        //remover a senha do atributo senha do objeto usuário
        delete usuario.senha;

        //path usuario_detalhe/<email do usuario>
        //Não pode ter caracter especial nos nós do firebase
        //então vamos criptografar o email com a funcao "btoa" (atob volta a criptografia)
        firebase.database()
          .ref(`usuario_detalhe/${btoa(usuario.email)}`)
            .set(usuario)
              .then ( () => { observer.next('Ok'); })
              .catch( (erro: firebase.FirebaseError) => {
                observer.error(erro.code);
              })

      })
      .catch( (erro: firebase.FirebaseError) => {
        observer.error(erro.code);
      })

    })    
  }

  /**
   * Realiza a autenticação do usuário no Firebase.
   * @param usuario 
   */
  public autenticar(usuario: Usuario): Observable<string> {
    
    return new Observable( (observer: Observer<string>) => {
      
      firebase.auth().signInWithEmailAndPassword(usuario.email, usuario.senha)
      .then( (resposta: firebase.User) => {
        firebase.auth().currentUser.getIdToken()
          .then( (idToken: string) => {
            this.tokenId = idToken;
            observer.next(this.tokenId);
          })
          .catch( (erro: firebase.FirebaseError) => {
            observer.error(erro.message);
          })
      })
      .catch( (erro: firebase.FirebaseError) => {
        observer.error(erro.code);
      })

    })

  }

}
