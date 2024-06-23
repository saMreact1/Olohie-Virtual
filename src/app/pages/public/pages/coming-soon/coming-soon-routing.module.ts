import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComingSoonComponent } from './components/coming-soon.component';

const comingSoonRoutes: Routes = [
  {
    path: '',
    component: ComingSoonComponent
  },
  {
    path: '',
    redirectTo: 'coming-soon',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(comingSoonRoutes)],
  exports: [RouterModule]
})

export class ComingSoonRoutingModule { }
