import { Component, OnInit } from '@angular/core';

import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ OfertasService ]
})
export class HomeComponent implements OnInit {

  public ofertas: Oferta[];

  constructor(private ofertasServices: OfertasService) { }

  ngOnInit() {
    //this.ofertas = this.ofertasServices.getOfertas();
    //console.log(this.ofertas);
    this.ofertasServices.getOfertas2()
      .then( (ofertas: Oferta[]) => {
          console.log('Ofertas chegaram depois de 3 segundos');
          this.ofertas = ofertas;
        })
        .catch( (erro) => {
          console.log(erro);
        })
  }

}
