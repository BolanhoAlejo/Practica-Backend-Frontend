import { Component } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { Router } from '@angular/router';
import { Ticket } from '../../models/ticket';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ticketform',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ticketform.component.html',
  styleUrl: './ticketform.component.css'
})
export class TicketformComponent {

  ticket: Ticket = new Ticket();
  Tickets!: Array<Ticket>;

  constructor(private ticketService: TicketService, private router: Router) {}

  GenerarTicket(): void {
    this.ticketService.postTicket(this.ticket).subscribe(
      (data) => {
        if(data.status == 1){
          alert("Ticket guardado correctamente");
          this.router.navigate(['ticket']);
        }
      },
      (error) => {
        console.log(error);
      }
    );
    this.ticket = new Ticket();
  }

ActualizarTicket(): void {
  this.ticketService.putTicket(this.ticket).subscribe(
    (data) => {
      if(data.status == 1){
        alert("Ticket actualizado correctamente");
        this.router.navigate(['ticket']);
      }
    },
    (error) => {
      console.log(error);
    }
  );
  this.ticket = new Ticket();
}

}
