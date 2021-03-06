import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';


import { Observable } from 'rxjs/Observable';
/* 
O map foi importado para poder utilizar
o método map do Observable que foi importado
acima
 */
import 'rxjs/add/operator/map';

/**
 * O retry foi importado para poder utilizar
 * o método rety do Observable e fazer retentativas
 * caso ocorra erro na requisição
 */
import 'rxjs/add/operator/retry';

/* 
    O toPromisse foi importado para poder utilizar
    o método no retorno do http e transformar um 
    observer em uma promise
*/
import 'rxjs/add/operator/toPromise';

import { Oferta } from './shared/oferta.model';
import { environment } from '../environments/environment';

@Injectable()
export class OfertasService {

    constructor(private http: Http) {}

    /** 
     * Obtem todas as ofertas.
    */
    public getOfertas(): Promise<Oferta[]> {

        return this.http.get(`${environment.baseURL}/ofertas?destaque=true`)
            .toPromise()
                .then( (resposta: Response) => {                    
                    return resposta.json();
                })
    }

    /**
     * Obtém todas as ofertas por categoria
     * 
     * @param categoria 
     */
    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {

        return this.http.get(`${environment.baseURL}/ofertas?categoria=${categoria}`)
            .toPromise()
                .then( (resposta: Response) => {
                    return resposta.json();
                })

    }

    /**
     * Obtem uma oferta pelo id.
     * 
     * @param id 
     */
    public getOfertaPorId(id: number): Promise<Oferta> {
        return this.http.get(`${environment.baseURL}/ofertas?id=${id}`)
            .toPromise()
            .then( (resposta: Response) => {
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
        return this.http.get(`${environment.baseURL}/como-usar?id=${id}`)
            .toPromise()
                .then( (resposta: Response) => {
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
        return this.http.get(`${environment.baseURL}/onde-fica?id=${id}`)
            .toPromise()
                .then( (resposta: Response) => {
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
        return this.http.get(`${environment.baseURL}/ofertas?descricao_oferta_like=${termo}`)
            .retry(10)
            .map( (resposta: Response) => resposta.json());
    }

}