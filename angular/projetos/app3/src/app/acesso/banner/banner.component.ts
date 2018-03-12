import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';

import { Imagem } from './imagem.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    trigger('banner',[
      state('escondido',style({
        'opacity': 0
      })),
      state('visivel', style({
        'opacity': 1
      })),
      transition('escondido <=> visivel', animate('1s ease-in'))
    ])
  ]
})
export class BannerComponent implements OnInit {

  public imagens: Imagem[] = [
    new Imagem('visivel','/assets/banner-acesso/img_1.png'),
    new Imagem('escondido','/assets/banner-acesso/img_2.png'),
    new Imagem('escondido','/assets/banner-acesso/img_3.png'),
    new Imagem('escondido','/assets/banner-acesso/img_4.png'),
    new Imagem('escondido','/assets/banner-acesso/img_5.png')
  ]

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.animarBanner()
    },3000);
  }

  private animarBanner(): void {

    let indiceProximaImagem: number;

    for(let i:number=0; i<this.imagens.length; i++) {

      if(this.imagens[i].estado === 'visivel') {
        this.imagens[i].estado = 'escondido'

        indiceProximaImagem = i === 4 ? 0 : i+1;
        this.imagens[indiceProximaImagem].estado = 'visivel';

        break;
      }

    }

    setTimeout(() => {
      this.animarBanner()
    },3000);
  }

}
