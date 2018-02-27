import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit {

  /* Parâmetro que o componente espera ao ser utilizado
     Essa passagem de parâmetro é feita do componente pai (o que está 
     usando esse componente) através do Property Binding conform exemplo abaixo:
      Ex: <app-progresso [progressoParam]="progresso"></app-progresso> 
  */
  @Input('progressoParam')
  public progressoValor: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
