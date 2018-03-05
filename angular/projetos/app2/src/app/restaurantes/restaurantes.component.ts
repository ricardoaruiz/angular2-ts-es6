import { Component, OnInit } from '@angular/core';

import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [ OfertasService ]
})
export class RestaurantesComponent implements OnInit {

  public ofertas: Oferta[];

  public dataAtual: Date = new Date();

  constructor(private ofertasServices: OfertasService) { }

  ngOnInit() {
    this.carregarOfertas();
  }

  private carregarOfertas(): void {
    this.ofertasServices.getOfertasPorCategoria('restaurante')
      .then( (ofertas: Oferta[]) => {
        this.ofertas = ofertas;
        console.log(this.ofertas);
      })
  }

}
