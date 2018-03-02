import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css']
})
export class OndeFicaComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
      //pegando o id da rota pai do componente oferta
      let id = this.route.parent.snapshot.params['id']
      console.log('onde-fica: ' + id);
  }

}
