import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  @Input('tentativarParam')
  public tentativas: number;

  public coracoes: Coracao[] = [
    new Coracao(true), 
    new Coracao(true), 
    new Coracao(true)
  ];

  constructor() { }

  /** 
   * Executado durante o processo de decoração dos valores recebidos de 
   * componentes pais para os compontens filhos. Sempre que existe input
   * de dados ou os dados são alterados esse método é executado.
   * Ele é executado antes do ngOnInit no ciclo de vida e depois do construtor
  */
  ngOnChanges() {
    console.log('tentativas recebidas ' + this.tentativas)
  }

  ngOnInit() {

  }
  

}
