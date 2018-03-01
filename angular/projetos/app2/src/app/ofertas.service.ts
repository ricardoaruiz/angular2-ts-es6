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

    private baseURL: string = 'http://localhost:3000';

    constructor(private http: Http) {}

    /** 
     * Obtem todas as ofertas.
    */
    public getOfertas(): Promise<Oferta[]> {

        return this.http.get(this.baseURL + '/ofertas?destaque=true')
            .toPromise()
                .then( (resposta: any) => {                    
                    return resposta.json();
                })
    }

    /**
     * Obtém todas as ofertas por categoria
     * 
     * @param categoria 
     */
    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {

        return this.http.get(this.baseURL + `/ofertas?categoria=${categoria}`)
            .toPromise()
                .then( (resposta: any) => {
                    return resposta.json();
                })

    }

}