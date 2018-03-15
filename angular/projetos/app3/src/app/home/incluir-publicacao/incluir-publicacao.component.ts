import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { BdService } from '../../service/bd.service';

@Component({
  selector: 'app-incluir-publicacao',
  templateUrl: './incluir-publicacao.component.html',
  styleUrls: ['./incluir-publicacao.component.css']
})
export class IncluirPublicacaoComponent implements OnInit {

  // Formulário de publicação
  public formularioNovaPublicacao: FormGroup;

  /**
   * Construtor da classe do componente
   * @param formBuilder
   */
  constructor(
    private formBuilder: FormBuilder,
    private bdService: BdService
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  /**
   * Realiza uma nova publicação
   */
  public publicar(): void {
    this.bdService.publicar();
  }

  /**
   * Constroi a referência do formulário de publicação
   */
  private buildForm(): void {
    this.formularioNovaPublicacao = this.formBuilder.group({
      titulo: ['', []]
    })
  }

}
