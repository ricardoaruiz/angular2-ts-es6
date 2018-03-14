import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

import { Usuario } from '../model/usuario.model';

@Injectable()
export class AutenticacaoService {

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
  public autenticar(usuario: Usuario): void {
    firebase.auth().signInWithEmailAndPassword(usuario.email, usuario.senha)
      .then( (resposta: firebase.User) => {
        console.log(resposta);
      })
      .catch( (erro: firebase.FirebaseError) => {
        console.log(erro);
      })
  }

}
