import { CadastroService } from './../services/cadastro.service';
import { Component, Input, OnInit } from '@angular/core';
import { Cadastro } from '../models/cadastro.model';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  cadastros: any[];
  constructor(private service: CadastroService) { }

  ngOnInit() {
    this.service.todas().subscribe((cadastros: Cadastro[])=> {
      console.table(cadastros);
      this.cadastros = cadastros;
    })
  }

}
