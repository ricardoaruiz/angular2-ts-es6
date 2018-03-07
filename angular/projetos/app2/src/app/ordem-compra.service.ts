import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Pedido } from './shared/pedido.model';

//import { environment } from '../environments/environment';

@Injectable()
export class OrdemCompraService {

  constructor(private http: Http) { }

  public efetivarCompra(pedido: Pedido): void {
    console.log(pedido);

    // this.http.post(`${environment.baseURL}\pedido`, pedido)
    //   .map( (resposta: Response) => {
    //     pedido = resposta.json();
    //   })
    
  }

}
