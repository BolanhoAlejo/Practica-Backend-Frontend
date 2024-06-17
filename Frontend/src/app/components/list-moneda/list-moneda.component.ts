import { Component } from '@angular/core';
import { MonedaService } from '../../services/moneda.service';
import { Transaccion } from '../../models/transaccion';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-moneda',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './list-moneda.component.html',
  styleUrl: './list-moneda.component.css'
})
export class ListMonedaComponent {

transaccion: Transaccion = new Transaccion();
transacciones!: Array<Transaccion>;

  constructor(public monedaService: MonedaService) { }

  obtenerTransacciones() {
    this.monedaService.getTransacciones().subscribe(
      data => {
      this.transacciones = data;
      console.log(this.transacciones);
    },
    error => {
      console.log(error);
    }
  )
  }

  ObtenerTransaccionesMoneda(monedaOrigen: String, monedaDestino: String) {
    this.monedaService.getTransaccionesMoneda(monedaOrigen, monedaDestino).subscribe(
      data => {
      this.transacciones = data;
      console.log(this.transacciones);
    },
    error => {
      console.log(error);
    });
  }

}
