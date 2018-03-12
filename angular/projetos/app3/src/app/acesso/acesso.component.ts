import { Component, OnInit} from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

/*Cria uma animação na criação do componente void => criado
deslizando o componente da esquerda para direita e vice-versa*/
@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css'],
  animations: [
    trigger('animacao-banner', [
      state('criado',style({
        "opacity": 1
      })),
      transition('void => criado', [
        style({
          "opacity": 0,
          "transform": 'translate(-120px, 0)'
        }),
        animate('1000ms 0s ease-in-out')
      ])
    ]),
    trigger('animacao-painel', [
      state('criado',style({
        "opacity": 1
      })),
      transition('void => criado', [
        style({
          "opacity": 0,
          "transform": 'translate(120px, 0)'
        }),
        animate('1000ms 0s ease-in-out')
      ])
    ])    
  ]
})
export class AcessoComponent implements OnInit {

  // Estado para o banner
  public estadoBanner:string = 'criado';

  // Estado para o painel de login
  public estadoPainel: string = 'criado';

  constructor() { }

  ngOnInit() {
  }

}
