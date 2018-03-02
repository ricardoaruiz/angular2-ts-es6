import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit {

  public oferta: Oferta;

  constructor(
      private route: ActivatedRoute,
      private ofertaService: OfertasService) { }

  ngOnInit() {
    console.log('Parametro recebido ' + this.route.snapshot.params['id']);

    // Mostrando como usar o subscribe para obter parâmetros de rota
    // this.route.params.subscribe((parametro: any) => {
    //   console.log(parametro);
    // });

    let id = this.route.snapshot.params['id'];
    this.carregarOferta(id);
  }

  private carregarOferta(id: number): void {
    this.ofertaService.getOfertaPorId(id)
      .then( (oferta: Oferta) => {
        this.oferta = oferta;
      })
  }

}
