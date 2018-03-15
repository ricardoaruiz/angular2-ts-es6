import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';

import * as firebase from 'firebase';

import { BdService } from '../../service/bd.service';
import { ProgressoService } from '../../service/progresso.service';

@Component({
  selector: 'app-incluir-publicacao',
  templateUrl: './incluir-publicacao.component.html',
  styleUrls: ['./incluir-publicacao.component.css'],
})
export class IncluirPublicacaoComponent implements OnInit {

  // Email do usuario logado recuperado do firebase
  public email: string = undefined;

  // Formulário de publicação
  public formularioNovaPublicacao: FormGroup;

  // Imagem a ser feito upload para ser publicada
  private imagem: any;

  // Status de progresso da publicação
  public progressoPublicacao: string = ProgressoService.STATUS.PENDENTE;

  public readonly STATUS_PUBLICACAO: any = ProgressoService.STATUS;
  
  public porcentagemUpload: number;

  /**
   * Construtor da classe do componente
   * @param formBuilder
   */
  constructor(
    private formBuilder: FormBuilder,
    private bdService: BdService,
    private progressoService: ProgressoService
  ) { }

  ngOnInit() {
    this.buildForm();

    //Inscrição no serviço do firebase que retorna o objeto do usuario logado
    //a cada alteração que ocorrer com o mesmo.
    firebase.auth().onAuthStateChanged( (user: firebase.User) => {
      if(user) {
        this.email = user.email;
      }
    })
  }

  /**
   * Realiza uma nova publicação
   */
  public publicar(): void {
    this.bdService.publicar({
      email: this.email,
      titulo: this.formularioNovaPublicacao.value.titulo,
      imagem: this.imagem
    });

    this.acompanharProgressoUpload();
  }

  /**
   * Pega os dados do input da imagem a ser feito o upload
   * @param  
   */
  public preparaImagemUpload(event: Event): void {
     this.imagem = (<HTMLInputElement>event.target).files[0];    
  }

  /**
   * Constroi a referência do formulário de publicação
   */
  private buildForm(): void {
    this.formularioNovaPublicacao = this.formBuilder.group({
      titulo: ['', []]
    })
  }

  /**
   * Faz o acompanhamento do processo de upload da imagem
   */
  private acompanharProgressoUpload(): void {
    let continua = new Subject();
    continua.next(true);

    let acompanhamentoUpload = Observable.interval(500);
    acompanhamentoUpload
      .takeUntil(continua)
      .subscribe( () => {

        //Atuaiza o status
        this.progressoPublicacao = ProgressoService.STATUS.ANDAMENTO;

        //Atualiza o percentual de upload
        if (this.progressoService.estado) {
          this.porcentagemUpload = Math.round((this.progressoService.estado.bytesTransferred / this.progressoService.estado.totalBytes) * 100);
        }

        if(this.progressoService.status === ProgressoService.STATUS.CONCLUIDO) {
          this.progressoPublicacao = ProgressoService.STATUS.CONCLUIDO;
          continua.next(false);
        }
      })
  }
}
