import { Injectable } from '@angular/core';

import { Usuario } from '../model/usuario.model';

@Injectable()
export class AutenticacaoService {

  constructor() { }

  public cadastrarUsuario(usuario: Usuario): void {
    console.log('Chegamos até o serviço ',usuario);    
  }

}
