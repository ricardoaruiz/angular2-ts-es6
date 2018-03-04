import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';


@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService ]
})
export class TopoComponent implements OnInit {

  private ofertas: Observable<Oferta[]>

  constructor(private ofertaService: OfertasService) { }

  ngOnInit() {
  }

  public capturarFiltro(termoDaBusca: string) {
     this.ofertas = this.ofertaService.pesquisaOfertas(termoDaBusca)
     this.ofertas.subscribe( (ofertas: Oferta[]) => console.log(ofertas) )
  }

}
