import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cadastro } from '../models/cadastro.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  private listaCadastro: any[];
  private url = 'http://localhost:3000/cadastros';

constructor(private httpClient: HttpClient) {
  this.listaCadastro = [];
 }

 get cadastros() {
   return this.listaCadastro;
 }

 adicionar(cadastro: Cadastro): Observable<Cadastro> {
  this.hidratar(cadastro);

  return this.httpClient.post<Cadastro>(this.url, cadastro);
}

todas(): Observable<Cadastro[]> {
  return this.httpClient.get<Cadastro[]>(this.url);
}

private hidratar(cadastro: Cadastro) {
  cadastro.data = new Date();
}
}
