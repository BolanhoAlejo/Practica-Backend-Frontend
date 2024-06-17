import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Page1Component } from './components/page1/page1.component';



@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: Page1Component }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
