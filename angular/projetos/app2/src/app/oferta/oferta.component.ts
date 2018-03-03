import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { Observable } from 'rxjs/Observable';

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
export class OfertaComponent implements OnInit {

  public oferta: Oferta;

  constructor(
      private route: ActivatedRoute,
      private ofertaService: OfertasService) { }

  ngOnInit() {
    // Mostrando como usar o subscribe para obter parâmetros de rota
    // this.route.params.subscribe((parametro: any) => {
    //   console.log(parametro);
    // });
    let id = this.route.snapshot.params['id'];
    this.carregarOferta(id);

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

    tempo.subscribe( (intervalo: number) => { 
      console.log(intervalo) 
    } )

  }

  private carregarOferta(id: number): void {
    this.ofertaService.getOfertaPorId(id)
      .then( (oferta: Oferta) => {
        this.oferta = oferta;
      })
  }

}
