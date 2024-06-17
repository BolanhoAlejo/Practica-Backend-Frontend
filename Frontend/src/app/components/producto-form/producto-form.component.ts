import { Component, NgModule } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto';
import { Router } from '@angular/router';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-producto-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './producto-form.component.html',
  styleUrl: './producto-form.component.css'
})
export class ProductoFormComponent {

  producto: Producto = new Producto();
  productos!: Array<Producto>;

  constructor(private productoService: ProductoService, private router: Router) { 
  }

  CargarProducto(): void {
    this.productoService.postProducto(this.producto).subscribe(
      (data) => {
        if(data.status == 1){
          alert("Producto guardado correctamente");
          this.router.navigate(['producto']);
        }
      },
      (error) => {
        console.log(error);
      }
    );
    this.producto = new Producto();
  }

  
}
