import { Component, OnInit} from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

/*Cria uma animação na criação do componente void => criado
deslizando o componente da esquerda para direita e vice-versa*/
@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css'],
  //Criação de animação
  //  "animation" é um array de "trigger", onde cada "trigger" é associada a um elemento
  //  do template para realizar a animação.
  //
  //  Nas triggers criamos os "state" que tem suas características (css) e criamos
  //  as "transition" entre esses estados.
  //
  //  Por fim temos o "animate" que efetivamente executa a animação. 
  //  Onde temos:
  //    - Primeiro parâmetro a duração da animação
  //    - Segundo parâmetro um delay (tempo antes de animação)
  //    - Terceiro parâmetro a aceleração que pode ser vista nesse link:
  //        https://angular.io/guide/animations#easing
  //        http://easings.net/
  animations: [
    trigger('animacao-banner', [
      state('criado',style({
        "opacity": 1
      })),
      transition('void => criado', [
        style({
          "opacity": 0,
          "transform": 'translate(-300px, 0)'
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
          "transform": 'translate(300px, 0)'
        }),
        animate('2000ms 0s ease-in-out', 
          //Criação dos keyframes para dar mais detalhes a animação
          keyframes([
            style({
              "offset": 0.15, //ponto que equivale a 15% do tempo
              //propriedades css a serem aplicadas nesse instante de tempo
              "opacity": 1,
              "transform": "translateX(0)"
            }),
            style({
              "offset": 0.86, //ponto que equivale a 86% do tempo
              //propriedades css a serem aplicadas nesse instante de tempo
              "opacity": 1,
              "transform": "translateX(0)"
            }),
            style({
              "offset": 0.88, //ponto que equivale a 88% do tempo
              //propriedades css a serem aplicadas nesse instante de tempo
              "opacity": 1,
              "transform": "translateY(-10px)"
            }),
            style({
              "offset": 0.90, //ponto que equivale a 90% do tempo
              //propriedades css a serem aplicadas nesse instante de tempo
              "opacity": 1,
              "transform": "translateY(10px)"
            }),
            style({
              "offset": 0.92, //ponto que equivale a 92% do tempo
              //propriedades css a serem aplicadas nesse instante de tempo
              "opacity": 1,
              "transform": "translateY(-10px)"
            }),
            style({
              "offset": 0.94, //ponto que equivale a 94% do tempo
              //propriedades css a serem aplicadas nesse instante de tempo
              "opacity": 1,
              "transform": "translateY(10px)"
            }),
            style({
              "offset": 0.96, //ponto que equivale a 96% do tempo
              //propriedades css a serem aplicadas nesse instante de tempo
              "opacity": 1,
              "transform": "translateY(-10px)"
            }),
            style({
              "offset": 0.98, //ponto que equivale a 98% do tempo
              //propriedades css a serem aplicadas nesse instante de tempo
              "opacity": 1,
              "transform": "translateY(10px)"
            }),                        
            style({
              "offset": 1, //ponto que equivale a 100% do tempo
              //propriedades css a serem aplicadas nesse instante de tempo
              "opacity": 1,
              "transform": "translateX(0)"
            })
        ]))
      ])
    ]),
    trigger('animacao-painel-erro', [
      state('animado-erro', style({
        "opacity": 1,
      })),
      transition('* => animado-erro', [
        style({
          "transform": "translateX(10px)"
        }),
        animate('250ms 0s ease-in-out',
          keyframes([
            style({
              "offset": 0.20,
              "transform": "translateX(0px)"
            }),
            style({
              "offset": 0.40,
              "transform": "translateX(10px)"
            }),
            style({
              "offset": 0.60,
              "transform": "translateX(0px)"
            }),
            style({
              "offset": 0.80,
              "transform": "translateX(10px)"
            }),            
            style({
              "offset": 1,
              "transform": "translateX(0px)"
            })            
          ])
        )
      ])
    ]
    )
  ]
})
export class AcessoComponent implements OnInit {

  // Estado para o banner.
  public estadoBanner:string = 'criado';

  // Estado para os paineis de login e cadastro para animação de entrada
  public estadoPainel: string = 'criado';

  // Estado para os paineis de login e cadastro para animação de erro
  public estadoPainelErro: string = 'criado';

  // Indica se o formulário de cadastro está sendo exibido.
  public cadastro: boolean = false;

  // Email do usuário
  public email: string;

  constructor() { }

  ngOnInit() {
  }

  public trocarPainel(obj: any): void {
    console.log(obj);
    this.cadastro = obj.painel == 'cadastro' ? true : false;
    if (obj.email) {
      this.email = obj.email;
    }
  }

  /**
   * Executado no ínicio da animação do painel de login
   */
  public inicioDaAnimacaoEntrada(): void {
    console.log('Inicio da animação');
  }

  /** 
   * Executado no fim da animação do painel de login
  */
  public fimDaAnimacaoEntrada(): void {
    console.log('Fim da animação');
  }  

  /**
   * Método chamado pelos componentes filhos para colocar
   * o painel em estado de erro e assim iniciar a animação.
   */
  public colocaPainelEmEstadoDeErro(): void {
    this.estadoPainelErro = 'animado-erro';
  }

  /**
   * Método executado no final da animação do erro
   * para tirar o painel do estado de erro.
   */
  public voltaEstadoPainelErro(): void {
    this.estadoPainelErro = 'criado';
  }

}
