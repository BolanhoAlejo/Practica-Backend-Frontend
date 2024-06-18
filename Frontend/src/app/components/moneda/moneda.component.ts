import { Component } from '@angular/core';
import { MonedaService } from '../../services/moneda.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Transaccion } from '../../models/transaccion';

@Component({
  selector: 'app-moneda',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './moneda.component.html',
  styleUrl: './moneda.component.css'
})
export class MonedaComponent {

from: string = "";
to: string = "";
amount: string = "";

resultados:any = [];

conversion:any = [];

transaccion: Transaccion = new Transaccion();
transacciones!: Array<Transaccion>;

constructor(public monedaService: MonedaService){}

ObtenerCambio(){
  this.monedaService.getMoneda(this.from, this.to, this.amount).subscribe(
    (result: any) => {
      console.log(result);
      this.resultados = result;
      this.transaccion.cantidadDestino = this.resultados.result;
      this.transaccion.tasaConversion = this.resultados.meta.rates.from;
      this.conversion = this.resultados.meta.formated.from;
    },
    (error: any) => {
      console.log(error);
    }
  )
}

GenerarTransaccion(): void {
  this.monedaService.postTransaccion(this.transaccion).subscribe(
    (result: any) => {
      console.log(result);
      this.resultados = result;
    },
    (error: any) => {
      console.log(error);
    }
  )
}

}
