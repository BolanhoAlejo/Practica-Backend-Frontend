import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productos !: Array<Producto>;

  constructor(public _http: HttpClient) { 
    console.log('Servicio de productos cargado');
  }

getProducto(): Observable<any> {
  let httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
  }
  return this._http.get('http://localhost:3000/api/producto/', httpOptions);
}

getProductoDestacado(): Observable<any> {
  let httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
  }
  return this._http.get('http://localhost:3000/api/producto/destacados/', httpOptions);
}

postProducto(producto: Producto): Observable<any> {
  let httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
  }
  let boddy:any = JSON.parse(JSON.stringify(producto));
  return this._http.post('http://localhost:3000/api/producto/', producto, httpOptions);
}

}
