import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';

/* 
Import necessário para utilizar os operadores do Observable 
neste caso vamos usar o "interval"
 */
import 'rxjs/Rx';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit, OnDestroy {

  private tempoObservableSubscription: Subscription
  private meuObservableTesteSubscription: Subscription

  public oferta: Oferta;

  constructor(
      private route: ActivatedRoute,
      private ofertaService: OfertasService) { }

  ngOnInit() {
    // Mostrando como usar o subscribe para obter parâmetros de rota
    // this.route.params.subscribe((parametro: any) => {
    //   console.log(parametro);
    // });
    //let id = this.route.snapshot.params['id'];
    //this.carregarOferta(id);

    this.route.params.subscribe( (parametros: Params) => {
      this.carregarOferta(parametros.id);
    } )

  /*  
    // Observable para pegar parametros da rota
    this.route.params.subscribe(
      (parametro: any) => { console.log(parametro) },
      (erro: any) => { console.log(erro) },
      (() => { console.log('processamento concluído') } )
    ) 
  */

    /**
     * Neste exemplo foi criado um observable com o operador interval que gera
     * inteiro a cada intervalor de tempo (parametro passado para ele).
     * 
     * Logo em seguida cria-se uma inscrição nesse observable para poder utilizar
     * os inteiros gerados e tomar alguma ação.
     * 
     * Isso foi só para demostrar como podemos criar um observable com um de seus
     * operadores. Existem mais operadores que podem ser vistos na documentação
     * em: http://reactivex.io/documentation/operators.html
     */
    
    let tempo = Observable.interval(2000)

    this.tempoObservableSubscription = tempo.subscribe( (intervalo: number) => { 
      console.log(intervalo) 
    } )


/* 
    Aqui foi criado um observável que emite uma string e em seguida foi
    feito um subscribe nele para pegar a string e mostrar no console.

    O observavel pode ter uma série de eventos (next) sendo realizada,
    um erro caso ocorra um erro e um complete para encerrar a stream
    de eventos.

    Já o observador (subscribe) recebe
    Primeiro parâmetro é uma função para tratar os eventos (next)
    Segundo parâmetro é uma função para tratar o erro (error)
    Terceiro parâmetro é uma função para tratar quando o stream é encerrado. (complete)
    
*/
    //observable (observável)
    let meuObservavel = Observable.create( (observer: Observer<string>) => {
      observer.next('Primeiro evento da stream')
      observer.next('Segundo evento da stream')
      observer.complete()
      observer.error('Algum erro ocorreu')
      observer.next('Terceiro evento da stream')
    })

    //observable (observador)
    this.meuObservableTesteSubscription = meuObservavel.subscribe(
      (resultado: string) => console.log(resultado),
      (erro: string) => console.log(erro),
      () => console.log('Finalizado')
    )


  }

  ngOnDestroy() {
/* 
    Faz o unsubscribe dos observables. Sempre é necessário fazer o unsubscribe
    para evitar os memory leaks.
 */
    this.tempoObservableSubscription.unsubscribe();
    this.meuObservableTesteSubscription.unsubscribe();
  }

  private carregarOferta(id: number): void {
    this.ofertaService.getOfertaPorId(id)
      .then( (oferta: Oferta) => {
        this.oferta = oferta;
      })
  }

}
