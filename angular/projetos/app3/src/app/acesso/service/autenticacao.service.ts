import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import * as firebase from 'firebase';

import { Usuario } from '../model/usuario.model';
import { Observer } from 'rxjs/Observer';


@Injectable()
export class AutenticacaoService {

  // Token retornado pela autenticação
  public tokenId: string = undefined;

  constructor() { }

  /**
   * Realiza o cadastro de um novo usuário no Firebase.
   * 
   * @param usuario 
   */
  public cadastrarUsuario(usuario: Usuario): Observable<string> {

    let msgErroCadastro: string;

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
                observer.error('Erro ao gerar os dados auxiliares do usuário');
              })

      })
      .catch( (erro: firebase.FirebaseError) => {
        switch (erro.code) {
          case 'auth/email-already-in-use':
            msgErroCadastro = 'Usuário já cadastrado'  
            break;
          case 'auth/weak-password':
            msgErroCadastro = 'Senha informada é muito fraca'
            break;
          default:
            msgErroCadastro = 'Erro desconhecido'
            break;
        }                
        observer.error(msgErroCadastro);
      })

    })    
  }

  /**
   * Realiza a autenticação do usuário no Firebase.
   * @param usuario 
   */
  public autenticar(usuario: Usuario): Observable<string> {
    
    let msgErroLogin: string;

    return new Observable( (observer: Observer<string>) => {
      
      firebase.auth().signInWithEmailAndPassword(usuario.email, usuario.senha)
      .then( (usuario: firebase.User) => {

        firebase.auth().currentUser.getIdToken()
          .then( (idToken: string) => {
            this.guardaTokenLocalStorage(idToken);
            observer.next(this.tokenId);
          })
          .catch( (erro: firebase.FirebaseError) => {
            observer.error('Erro ao obter o token do usuário');
          })
      })
      .catch( (erro: firebase.FirebaseError) => {
        switch (erro.code) {
          case 'auth/user-not-found':
            msgErroLogin = 'O nome de usuário inserido não pertence a uma conta. Verifique seu nome de usuário e tente novamente.';  
            break;              
          case 'auth/wrong-password':
            msgErroLogin = 'A senha do usuário não coincide.';  
            break;
          case 'auth/too-many-requests':
            msgErroLogin = 'Excedeu o número de tentativas.';  
            break;
          default:
            msgErroLogin = 'Erro desconhecido.';  
            break;
        }
        observer.error(msgErroLogin);
      })

    })

  }

  /**
   * Sai da aplicação
   */
  public logoff(): Observable<string> {

    return new Observable( (observer: Observer<string>) => {
      
      //Remove a autenticação do Firebase
      firebase.auth().signOut()
         .then( () => {
            this.removeTokenLocalStorage();
            observer.next('Logoff-Ok');
          })
          .catch( (erro: Error) => {
            console.log(erro);
            observer.error('Logoff-NOk');
          })
    })

    
  }

  /**
   * Informa se o usuário está autenticado
   */
  public autenticado(): boolean {   
    
    if (this.tokenId === undefined && 
        localStorage.getItem('tokenId') != null) {
          this.tokenId = localStorage.getItem('tokenId')
    }

    return this.tokenId !== undefined && this.tokenId != null;
  }

  /**
   * Guarda o token de autenticação no localStorage
   * @param idToken 
   */
  private guardaTokenLocalStorage(idToken: string): void {
    this.tokenId = idToken;
    localStorage.setItem('tokenId',idToken);    
  }

  /**
   * Remove o token de autenticação do localstorage
   */
  private removeTokenLocalStorage(): void {
    localStorage.removeItem('tokenId');
    this.tokenId = undefined;    
  }

}
