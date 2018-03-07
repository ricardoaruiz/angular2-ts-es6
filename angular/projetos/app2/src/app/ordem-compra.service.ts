import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Pedido } from './shared/pedido.model';

import { environment } from '../environments/environment';

@Injectable()
export class OrdemCompraService {

  constructor(private http: Http) { }

  public efetivarCompra(pedido: Pedido): Observable<Pedido> {

    //Configura o header da requisição para informar que será enviado um JSON
    let headers: Headers = new Headers();
    headers.append('content-type','application/json')

    /* 
    Realiza a requisição POST passando a URL, o body e o header e transforma o
    Observarble recebido em um Observable do tipo Pedido
    */
    return this.http.post
    (
      `${environment.baseURL}/pedidos`, 
       JSON.stringify(pedido),
       new RequestOptions({ headers: headers })
    )
    .map( (resposta: Response) => {
        pedido = resposta.json();
        return pedido;
    })
    
  }

}
