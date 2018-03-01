import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/* 
    O toPromisse foi importado para poder utilizar
    o método no retorno do http e transformar um 
    observer em uma promise
*/
import 'rxjs/add/operator/toPromise';

import { Oferta } from './shared/oferta.model';

@Injectable()
export class OfertasService {

    constructor(private http: Http) {}

    public getOfertas(): Promise<Oferta[]> {

        return this.http.get('http://localhost:3000/ofertas')
            .toPromise()
                .then( (resposta: any) => {                    
                    return resposta.json();
                })
    }

}