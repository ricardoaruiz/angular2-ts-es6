import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from '../../ofertas.service';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [ OfertasService ]
})
export class ComoUsarComponent implements OnInit {

  public comoUsar: string = '';

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) { }

  ngOnInit() {
    //pegando o id da rota pai do componente oferta
    // let id = this.route.parent.snapshot.params['id']
    // this.obtemComoUsarDaOferta(id);

      /* A cada modificação de parametro na rota esse trecho é
      executado*/
    this.route.parent.params.subscribe( (parametros: Params) => {
      this.obtemComoUsarDaOferta(parametros.id);
    })
  }

  private obtemComoUsarDaOferta(id: number): void {
    this.ofertasService.getComoUsarOfertaPorId(id)
      .then( (descricao: string) => {
        this.comoUsar = descricao;
      })
  }

}
