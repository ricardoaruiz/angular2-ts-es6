import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


import { Observable } from 'rxjs/Observable';
/* 
O map foi importado para poder utilizar
o método map do Observable que foi importado
acima
 */
import 'rxjs/add/operator/map';

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
     * @returns Promisse com os dados da descrição de como usar
     */
    public getComoUsarOfertaPorId(id: number): Promise<string> {
        return this.http.get(`${URL_API}/como-usar?id=${id}`)
            .toPromise()
                .then( (resposta: any) => {
                    return resposta.json()[0].descricao;
                })
    }

    /**
     * Busca os dados de onde fica de uma oferta através de seu id.
     * 
     * @param id 
     * @returns Promisse com os dados da descrição de onde fica
     */
    public getOndeFicaOfertaPorId(id: number): Promise<string> {
        return this.http.get(`${URL_API}/onde-fica?id=${id}`)
            .toPromise()
                .then( (resposta: any) => {
                    return resposta.json()[0].descricao;
                } )
    }

    /**
     * Faz a busca das ofertar em função do que o usuário informa no 
     * campo de busca no componente topo.
     * 
     * @param termo 
     * @returns observable
     */
    public pesquisaOfertas(termo: string): Observable<Oferta[]> {
        /* foi usado o campo descricao_oferta_like que não existe no retorno
            pois o json server implementa buscas com like dessa forma
        */
        return this.http.get(`${URL_API}/ofertas?descricao_oferta_like=${termo}`)
            .map( (resposta: any) => resposta.json());
    }

}