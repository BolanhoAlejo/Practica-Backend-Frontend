import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ProductoFormComponent } from './components/producto-form/producto-form.component';
import { MonedaComponent } from './components/moneda/moneda.component';
import { ListMonedaComponent } from './components/list-moneda/list-moneda.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { TicketformComponent } from './components/ticketform/ticketform.component';


export const routes: Routes = [
    { path: "home", component: HomeComponent},
    { path: "productos" , component: ProductoComponent},
    { path: "productosForm" , component: ProductoFormComponent},
    { path: "moneda" , component: MonedaComponent},
    { path: "transacciones" , component: ListMonedaComponent},
    { path: "ticket" , component: TicketComponent},
    { path: "ticketform" , component: TicketformComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];
