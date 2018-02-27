import { Component, OnInit } from '@angular/core';

import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public instrucao: string = 'Traduza a frase:'
  public frases: Frase[] = FRASES;
  public resposta: string;

  public rodada: number = 0;
  public rodadaFrase: Frase;

  constructor() { 
    this.proximaFrase();
  }

  ngOnInit() {
  }

  public atuallizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  public verificarResposta(): void {
    if (this.rodadaFrase.frasePtBr === this.resposta) {
      this.rodada++;
      this.proximaFrase();
    } else {
      alert('Tradução errada.');
    }
  }

  private proximaFrase(): void {
    this.rodadaFrase = this.frases[this.rodada];
  }
}
