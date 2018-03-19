import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AutenticacaoService } from '../acesso/service/autenticacao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /**
   * Construtor da classe do componente.
   * 
   * @param router 
   * @param autenticacaoService 
   */
  constructor(
    private router: Router,
    private autenticacaoService: AutenticacaoService
  ) { }

  ngOnInit() {
  }
  
  /**
   * Sair da aplicação
   */
  public sair(): void {
    this.autenticacaoService.logoff()
      .subscribe(
        () => { this.router.navigate(['/'])},
        (erro: Error) => { console.log(erro) }
      )
  }

  public atualizarTimelinePai(): void {
    console.log('Chegamos até aqui');
    
  }

}
