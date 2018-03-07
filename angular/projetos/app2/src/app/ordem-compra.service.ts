import { Injectable } from '@angular/core';

import { Pedido } from './shared/pedido.model';

@Injectable()
export class OrdemCompraService {

  constructor() { }

  public efetivarCompra(pedido: Pedido): void {
    console.log('Chegamos até aqui');
    
  }

}
