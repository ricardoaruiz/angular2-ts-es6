import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('Parametro recebido ' + this.route.snapshot.params['id']);

    // Mostrando como usar o subscribe para obter parâmetros de rota
    // this.route.params.subscribe((parametro: any) => {
    //   console.log(parametro);
    // });
  }

}
