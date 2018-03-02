import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/* 
    O toPromisse foi importado para poder utilizar
    o método no retorno do http e transformar um 
    observer em uma promise
*/
import 'rxjs/add/operator/toPromise';

import { Oferta } from './shared/oferta.model';
import { URL_API } from './app.api';

@Injectable()
export class OfertasService {

    constructor(private http: Http) {}

    /** 
     * Obtem todas as ofertas.
    */
    public getOfertas(): Promise<Oferta[]> {

        return this.http.get(`${URL_API}/ofertas?destaque=true`)
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

        return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
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
        return this.http.get(`${URL_API}/ofertas?id=${id}`)
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

    /**
     * Busca os dados de como usar de uma oferta através de seu id
     * 
     * @param id 
     */
    public getComoUsarOfertaPorId(id: number): Promise<string> {
        return this.http.get(`${URL_API}/como-usar?id=${id}`)
            .toPromise()
                .then( (resposta: any) => {
                    return resposta.json()[0].descricao;
                })
    }

}