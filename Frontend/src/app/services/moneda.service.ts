import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaccion } from '../models/transaccion';

@Injectable({
  providedIn: 'root'
})
export class MonedaService {

  constructor(private _http: HttpClient) { }

getMoneda(fvalue: string, ftype: string, ttype: string): Observable<any> {
  let httpOptions = {
    headers: new HttpHeaders({
      'x-rapidapi-key': 'df9f879274msh4cb1a159ee30ef7p1470b2jsnfd3e0708f691',
      'x-rapidapi-host': 'community-neutrino-currency-conversion.p.rapidapi.com',
      'Content-Type': 'application/json'
    }),
  }
  const body = {
    'from-value': fvalue,
    'from-type': ftype,
    'to-type': ttype
  };
  return this._http.post('https://community-neutrino-currency-conversion.p.rapidapi.com/convert', body, httpOptions);
}

postTransaccion(transaccion: Transaccion): Observable<any> {
  let httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
  }
  let boddy:any = JSON.parse(JSON.stringify(transaccion));
  return this._http.post('http://localhost:3000/api/transaccion/', transaccion, httpOptions);
}

getTransacciones(): Observable<any> {
  let httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
  }
  return this._http.get('http://localhost:3000/api/transaccion/', httpOptions);
}

getTransaccionesMoneda(monedaOrigen: String, monedaDestino: String): Observable<any> {
  let httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
  }
  return this._http.get('http://localhost:3000/api/transaccion/'+monedaOrigen+'/'+monedaDestino, httpOptions);
}

}
