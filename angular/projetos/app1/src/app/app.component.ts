import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public jogoEmAndadamento: boolean = true;

  /**
   * Método que será chamado quando algum evento for emitido pelo
   * filho painel.component.ts
   * 
   * @param tipo parametro passado pelo filho ao emitir o evento
   */
  public encerrarJogo(tipo: string): void {
    console.log(tipo);
    this.jogoEmAndadamento = false;
  }
}
