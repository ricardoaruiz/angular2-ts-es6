import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'

/* foi criado o arquivo rxjs-extendsions no diretório util que tb foi
 criado, somente para centralizar os imports dos operadores dos observables
 e em qualquer lugar que precisar será somente importar esse novo arquivo.*/
import '../util/rxjs-extensions'

import { OfertasService } from '../ofertas.service'
import { Oferta } from '../shared/oferta.model'

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService ]
})
export class TopoComponent implements OnInit {

  //public resultadoOfertas: Oferta[];

  private ofertas: Observable<Oferta[]>
  private subjectPesquisa: Subject<string> = new Subject<string>();

  constructor(private ofertaService: OfertasService) { }

  ngOnInit() {
    /*Cria um observable com base em um subject e com isso é possível realizar
    alguns controles na execução desse observable*/
    this.ofertas = this.subjectPesquisa
      .debounceTime(1000) // executa a ação do switchmap após um segundo
      .distinctUntilChanged() // faz com que uma pesquisa seja feita somente se for diferente da anterior
      .switchMap( (termo: string) => { //faz com que o subscribe fique somente no último observable

        if (termo.trim() === '') {
          // retorna um observable de array de ofertas vazio
          return Observable.of<Oferta[]>([])
        }

        return this.ofertaService.pesquisaOfertas(termo)
        
      })
      .catch( (erro: any) => { 
        //Caso ocorra algum erro, devolve um observable de array de ofertas vazio
        return Observable.of<Oferta[]>([]);
      })

    /**
     * Aqui sempre que houver dados na stream do observable será
     * atualizado o atributo resultadoOfertas que por sua vez
     * atualizará o template do componente mostrando o resultado
     * da pesquisa realizada.
     */
    // this.ofertas.subscribe( (ofertas: Oferta[]) => { 
    //   this.resultadoOfertas = ofertas;
    // })
  }

  public pesquisa(termoDaBusca: string) {
    //  this.ofertas = this.ofertaService.pesquisaOfertas(termoDaBusca)
    //  this.ofertas.subscribe( 
    //     ( ofertas: Oferta[] ) => console.log(ofertas),
    //     ( erro: any ) => console.log(erro.status),
    //     () => console.log('Fluxo completo')
    //   )

    /* A cada caracter digitado, faz um next para o subject que por sua
    vez cria um observable */
    this.subjectPesquisa.next(termoDaBusca)
  }

  public limpaPesquisa(): void {
    this.subjectPesquisa.next('');
  }

}
