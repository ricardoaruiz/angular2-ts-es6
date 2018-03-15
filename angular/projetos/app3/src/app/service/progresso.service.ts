import { Injectable } from '@angular/core';

@Injectable()
export class ProgressoService {

  public static readonly STATUS = {
    ANDAMENTO: 'andamento',
    ERRO: 'erro',
    CONCLUIDO: 'concluido'
  }

  public status: string;

  public estado: any;

  constructor() { }

}
