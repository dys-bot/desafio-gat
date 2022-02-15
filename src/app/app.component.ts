import { CadastroService } from './services/cadastro.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  cadastros: any[] = [];

  constructor(private service: CadastroService) {}

  criar($event) {
    this.service.adicionar($event);
  }
}
