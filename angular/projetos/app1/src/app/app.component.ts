import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public tipoEncerramento: string;
  public jogoEmAndadamento: boolean = true;

  /**
   * Método que será chamado quando algum evento for emitido pelo
   * filho painel.component.ts
   * 
   * @param tipo parametro passado pelo filho ao emitir o evento
   */
  public encerrarJogo(tipo: string): void {
    this.tipoEncerramento = tipo;
    this.jogoEmAndadamento = false;
  }

  public reiniciarJogo(): void {
    this.jogoEmAndadamento = true;
    this.tipoEncerramento = undefined;
  }
}
