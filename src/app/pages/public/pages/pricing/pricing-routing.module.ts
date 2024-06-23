import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PricingComponent } from './components/pricing.component';

const pricingRoutes: Routes = [
  {
    path: '',
    component: PricingComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(pricingRoutes)],
  exports: [RouterModule]
})

export class PricingRoutingModule { }
