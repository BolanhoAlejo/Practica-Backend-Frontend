import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private _http: HttpClient) { }

getTicket(): Observable<any> {
  let httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
  }
  return this._http.get('http://localhost:3000/api/ticket/', httpOptions);
}
  
deleteTicket(id: String): Observable<any> {
  let httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
  }
  return this._http.delete('http://localhost:3000/api/ticket/'+id, httpOptions);
}

getTicketCategoria(categoria: String): Observable<any> {
  let httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
  }
  return this._http.get('http://localhost:3000/api/ticket/'+categoria, httpOptions);
}

postTicket(ticket: Ticket): Observable<any> {
  let httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
  }
  let boddy:any = JSON.parse(JSON.stringify(ticket));
  return this._http.post('http://localhost:3000/api/ticket/', ticket, httpOptions);
}

putTicket(ticket: Ticket): Observable<any> {
  let httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
  }
  let boddy:any = JSON.parse(JSON.stringify(ticket));
  return this._http.put('http://localhost:3000/api/ticket/'+ticket._id, ticket, httpOptions);
}

}
