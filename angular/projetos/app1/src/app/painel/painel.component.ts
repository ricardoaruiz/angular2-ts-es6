import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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

  /**
   * Utilizado para emitir um evento para o componente pai 
   * O componente pai quando instanciar esse componente fará da seguinte forma:
   *  <app-painel (encerrarJogo)="encerrarJogo($event)"></app-painel>
   *
   * No app.component.ts tem um método que chama encerrarJogo que será executado
   * quando o evento for disparado pelo filho.
   * */
  @Output()
  public encerrarJogo: EventEmitter<string> = new EventEmitter();

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
      this.incrementaRodadaSucesso();
    } else {
      this.incrementaRodadaErro();
    }
  }
  
  /** 
   * A cada resposta correta, a rodada é incrementada e o progresso da barra
   * também, mas esse com base no número de frases existentes.
  */
  private incrementaRodadaSucesso(): void {
    this.rodada++;
    if (this.rodada < 4) {
      this.atualizaProgresso();
      this.proximaFrase();
    } else {
      this.atualizaProgresso(true);
      this.limparResposta();
      this.encerrarJogo.emit('vitoria');
    }
  }

  /** 
   * A cada resposta errada, decrementa as tentativas e verifica se 
   * a quantidade de tentativas não esgotou.
  */
  private incrementaRodadaErro(): void {
    this.tentativas--;
    if (this.tentativas === -1) {
      this.encerrarJogo.emit('derrota');
    }
  }

  /** 
   * Pega a frase da rodada atual.
  */
  private proximaFrase(): void {
    this.rodadaFrase = this.frases[this.rodada];
    this.limparResposta();
  }

  /** 
   * Limpa a resposta dada pelo jogador.
  */
  private limparResposta(): void {
    this.resposta = '';
  }

  /** 
   * Atualiza o percentual de progresso da barra de progresso
   * 
   * @param completo - indica se a o processo foi completado se não 
   * calcula o processo atual baseado na quantidade de frases
  */
  private atualizaProgresso(completo: boolean = false): void {
    if (!completo) {
      this.progresso = this.progresso + (100 / this.frases.length);    
    } else {
      this.progresso = 100;
    }
  }
}
