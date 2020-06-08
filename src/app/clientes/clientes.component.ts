import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [
    { id: 1, nombre: 'Cesar', apellido: 'Acual', email: 'cesar@mail.com', createAt: '2017-12-11' },
    { id: 1, nombre: 'Mr. John', apellido: 'Doe', email: 'john.doe@mail.com', createAt: '2017-11-11' },
    { id: 1, nombre: 'Linus', apellido: 'Torvalds', email: 'linus@mail.com', createAt: '2017-11-13' },
    { id: 1, nombre: 'Rasmus', apellido: 'Lerdorf', email: 'rasmus@mail.com', createAt: '2017-12-11' },
    { id: 1, nombre: 'Erich', apellido: 'Gamma', email: 'erich@mail.com', createAt: '2017-11-14' },
    { id: 1, nombre: 'Richard', apellido: 'Helm', email: 'richard@mail.com', createAt: '2017-11-15' },
    { id: 1, nombre: 'Ralph', apellido: 'Johnson', email: 'ralph@mail.com', createAt: '2017-11-16' },
    { id: 1, nombre: 'Bombasto', apellido: 'Vlissides', email: 'bombasto@mail.com', createAt: '2017-11-17' },
    { id: 1, nombre: 'Dr James', apellido: 'Gosling', email: 'james@mail.com', createAt: '2017-12-18' },
    { id: 1, nombre: 'Magma', apellido: 'Lee', email: 'magma@mail.com', createAt: '2017-11-19' },
    { id: 1, nombre: 'Tornado', apellido: 'Roe', email: 'tornado@mail.com', createAt: '2017-11-20' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
