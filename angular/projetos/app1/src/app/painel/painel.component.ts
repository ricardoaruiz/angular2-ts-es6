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
  public resposta: string = '';

  public rodada: number = 0;
  public rodadaFrase: Frase;

  public progresso: number = 0;
  public tentativas: number = 3;

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
      this.incrementaRodada();
    } else {
      this.tentativas--;
      if (this.tentativas === -1) {
        alert('Fim de jogo');
      }
    }
  }
  
  /** 
   * A cada resposta correta, a rodada é incrementada e o progresso da barra
   * também, mas esse com base no número de frases existentes.
  */
  private incrementaRodada(): void {
    this.rodada++;
    this.progresso = this.progresso + (100 / this.frases.length);
    this.proximaFrase();
  }

  /** 
   * Pega a frase da rodada atual.
  */
  private proximaFrase(): void {
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = '';
  }
}
