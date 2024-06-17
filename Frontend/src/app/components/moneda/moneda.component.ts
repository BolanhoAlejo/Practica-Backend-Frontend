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

fvalue: string = "";
ftype: string = "";
ttype: string = "";

resultados:any = [];

transaccion: Transaccion = new Transaccion();
transacciones!: Array<Transaccion>;

constructor(public monedaService: MonedaService){}

ObtenerCambio(){
  this.monedaService.getMoneda(this.fvalue, this.ftype, this.ttype).subscribe(
    (result: any) => {
      console.log(result);
      this.resultados = result;
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
      this.transaccion.cantidadDestino = this.resultados.result;
    },
    (error: any) => {
      console.log(error);
    }
  )
}

}
