import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { AutenticacaoService } from '../acesso/service/autenticacao.service';
import { PublicacoesComponent } from './publicacoes/publicacoes.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('publicacoes')
  public publicacoesComponent: PublicacoesComponent;

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
    this.publicacoesComponent.atualizarTimeLine();    
  }

}
