import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const publicRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import ('src/app/pages/public/pages/home/home.module').then(m => m.HomeModule)
  },  
  {
    path: 'about',
    loadChildren: () => import ('src/app/pages/public/pages/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'services',
    loadChildren: () => import ('src/app/pages/public/pages/services/services.module').then(m => m.ServicesModule)
  },
  {
    path: 'pricing',
    loadChildren: () => import ('src/app/pages/public/pages/pricing/pricing.module').then(m => m.PricingModule)
  },
  {
    path: 'blog',
    loadChildren: () => import ('src/app/pages/public/pages/blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: 'booking',
    loadChildren: () => import ('src/app/pages/public/pages/booking/booking.module').then(m => m.BookingModule)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(publicRoutes)],
  exports: [RouterModule]
})

export class PublicRoutingModule { }
