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

    /**
     * Obtem uma oferta pelo id.
     * 
     * @param id 
     */
    public getOfertaPorId(id: number): Promise<Oferta> {
        return this.http.get(this.baseURL + `/ofertas?id=${id}`)
            .toPromise()
            .then( (resposta: any) => {
                /*
                    O método shift  extrai o primeiro objeto do array, deslocando
                    todos os outros objetos um indice acima.
                */
                //return resposta.json().shift();
                return resposta.json()[0];
            })
            
    }

}