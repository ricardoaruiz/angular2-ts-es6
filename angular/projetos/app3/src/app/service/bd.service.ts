import { Injectable } from '@angular/core';

@Injectable()
export class BdService {

  constructor() { }

  public publicar(): void {
    console.log('Chegamos até o serviço responsável pelo controle de dados');    
  }

}
