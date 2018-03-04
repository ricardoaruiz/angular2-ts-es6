import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/switchMap';

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
  private subjectPesquisa: Subject<string> = new Subject<string>();

  constructor(private ofertaService: OfertasService) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa
      .switchMap( (termo: string) => {
        console.log('requisição http para a api');        
        return this.ofertaService.pesquisaOfertas(termo)
      })

    this.ofertas.subscribe( (ofertas: Oferta[]) => { console.log(ofertas); })
  }

  public pesquisa(termoDaBusca: string) {
    //  this.ofertas = this.ofertaService.pesquisaOfertas(termoDaBusca)
    //  this.ofertas.subscribe( 
    //     ( ofertas: Oferta[] ) => console.log(ofertas),
    //     ( erro: any ) => console.log(erro.status),
    //     () => console.log('Fluxo completo')
    //   )

    console.log('keyup caracter: ', termoDaBusca);
    this.subjectPesquisa.next(termoDaBusca)
  }

}
