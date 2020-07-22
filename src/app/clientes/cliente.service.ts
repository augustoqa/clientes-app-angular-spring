import { Injectable } from '@angular/core';
import { Cliente } from './cliente.js';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable()
export class ClienteService {

  private urlEndPoint: string = "http://localhost:8080/api/clientes";

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.urlEndPoint);
    // return this.http.get(this.urlEndPoint).pipe(
    //   map(response => response as Cliente[])
    // );
  }
}
