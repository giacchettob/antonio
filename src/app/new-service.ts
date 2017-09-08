import { Component, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'my-app',
    providers: [NewService]
})

@Injectable()
export class NewService {

  constructor(private http: Http) {}

  fetchData() {
    return this.http
    .get('http://private-anon-cd17a50ce9-62374605ac444eacba9311d731ac84a3.apiary-mock.com/projetos/GerenciamentoSoftware/Empresas/')
    .map((response) => response.json())
    .subscribe((data) => console.log(data))
  }
}