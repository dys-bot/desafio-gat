import { Router } from '@angular/router';
import { EventEmitter } from "@angular/core";
import { Component, Output } from "@angular/core";
import { Cadastro } from "../models/cadastro.model";
import { CadastroService } from "../services/cadastro.service";

@Component({
selector: 'app-novo-cadastro',
templateUrl: './novo-cadastro.component.html',
styleUrls: ['./novo-cadastro.component.scss'],
})
export class NovoCadastroComponent {

  @Output() aoCriar = new EventEmitter<any>();

  nome: string;
  email: string;

  constructor(private service: CadastroService, private router: Router) {

  }

 criar() {
   console.log('Nova conta criada');
   const nomeEmitir= {nome: this.nome, email: this.email};
   this.service.adicionar(nomeEmitir).subscribe((resultado) => {
     console.log(resultado);
     this.limparCampos();
     this.router.navigateByUrl('extrato');
   },
   (error) => console.error(error));
   console.log("Nome: ", this.nome);
   console.log("E-mail: ", this.email);
   this.limparCampos();
 }

 limparCampos() {
   this.nome = null;
   this.email = null;
 }
}
