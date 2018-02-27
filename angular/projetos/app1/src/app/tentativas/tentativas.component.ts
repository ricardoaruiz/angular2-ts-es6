import { Component, OnInit } from '@angular/core';

import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  public coracoes: Coracao[] = [
    new Coracao(true), 
    new Coracao(true), 
    new Coracao(true)
  ];

  public coracaoVazio: string = '/assets/coracao_vazio.png';
  public coracaoCheio: string = '/assets/coracao_cheio.png' 

  constructor() { }

  ngOnInit() {
  }

}
