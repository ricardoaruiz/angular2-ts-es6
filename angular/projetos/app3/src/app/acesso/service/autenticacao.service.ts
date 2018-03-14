import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

import { Usuario } from '../model/usuario.model';

@Injectable()
export class AutenticacaoService {

  constructor() { }

  public cadastrarUsuario(usuario: Usuario): void {
    console.log('Chegamos até o serviço ',usuario);    

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
              .catch( (erro: Error) => {
                console.log('Erro ao criar os dados do usuário Database', erro);                
              })

      })
      .catch( (erro: Error) => {
        console.log('Erro ao criar o usuário Auth', erro);
      })
  }

}
