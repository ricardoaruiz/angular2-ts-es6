import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  /**
   * Realiza uma nova publicação
   */
  public publicar(): void {
    console.log(this.formularioNovaPublicacao.value);
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
