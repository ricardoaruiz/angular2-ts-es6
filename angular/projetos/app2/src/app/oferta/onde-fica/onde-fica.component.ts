import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from '../../ofertas.service';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [ OfertasService ]
})
export class OndeFicaComponent implements OnInit {

  public descricaoOndeFica: string = '';

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService) { }

  ngOnInit() {
      //pegando o id da rota pai do componente oferta
      // let id = this.route.parent.snapshot.params['id']
      // this.obtemOndeFicaOferta(id);

      /* A cada modificação de parametro na rota esse trecho é
      executado*/
      this.route.parent.params.subscribe( (parametros: Params) => {
        this.obtemOndeFicaOferta(parametros.id);
      } )
  }

  private obtemOndeFicaOferta(id: number): void {
    this.ofertasService.getOndeFicaOfertaPorId(id)
      .then( (descricao: string) => {
        this.descricaoOndeFica = descricao;
      })
  }

}
