import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './components/booking.component';

const bookingRoutes: Routes = [
  {
    path: '',
    component: BookingComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(bookingRoutes)],
  exports: [RouterModule]
})

export class BookingRoutingModule { }
