import { Component } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { Router } from '@angular/router';
import { Ticket } from '../../models/ticket';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {

  tickets!: Array<Ticket>;

  constructor(private ticketService: TicketService, private router: Router) {}

ObtenerTickets(): void {
  this.ticketService.getTicket().subscribe(
    (data) => {
      this.tickets = data;
      console.log(this.tickets);
    },
    error => {
      console.log(error);
    }
  );
}

EliminarTickets(id: String): void {
  this.ticketService.deleteTicket(id).subscribe(
    (data) => {
      console.log(data);
      this.ObtenerTickets();
    },
    error => {
      console.log(error);
    }
  );
}

ObtenerTicketsPorCategoria(categoria: String): void {
  this.ticketService.getTicketCategoria(categoria).subscribe(
    (data) => {
      this.tickets = data;
      console.log(this.tickets);
    },
    error => {
      console.log(error);
    }
  );
}


}
