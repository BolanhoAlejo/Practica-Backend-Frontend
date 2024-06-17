import { Component } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Router } from '@angular/router';
import { Producto } from '../../models/producto';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {

  productos!: Array<Producto>;

  constructor(private productoService: ProductoService, private router: Router){
  }

  obtenerProductos() {
    this.productoService.getProducto().subscribe(
      data => {
      this.productos = data;
      console.log(this.productos);
    },
    error => {
      console.log(error);
    }
  )
  }

  obtenerProductosDestacados() {
    this.productoService.getProductoDestacado().subscribe(
      data => {
      this.productos = data;
      console.log(this.productos);
    },
    error => {
      console.log(error);
    }
  )
  }

}
