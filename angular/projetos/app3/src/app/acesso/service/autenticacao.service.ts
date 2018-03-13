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
        console.log(resposta);
      })
      .catch( (erro: Error) => {
        console.log(erro);
      })
  }

}
