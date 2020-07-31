import { Component, OnInit } from "@angular/core";
import { Cliente } from "./cliente";
import { ClienteService } from "./cliente.service";
import { Router } from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
})
export class FormComponent implements OnInit {
  private cliente: Cliente = new Cliente();
  private titulo: string = "Crear Cliente";

  constructor(private clienteService: ClienteService, private router: Router) {}

  ngOnInit() {}

  public create(): void {
    this.clienteService.create(this.cliente).subscribe((response) => {
      this.router.navigate(["/clientes"]);
      Swal.fire(
        "Nuevo cliente",
        `Cliente ${this.cliente.nombre} creado con éxito!`,
        "success"
      );
    });
  }
}
