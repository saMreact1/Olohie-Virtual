import { NgModule, Renderer2, RendererFactory2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingRoutingModule } from './booking-routing.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from 'src/app/shared/shared.module';

// Services
import { ScrollService } from 'src/app/core/services/scroll.service';

// Component
import { BookingComponent } from './components/booking.component';

// Material

@NgModule({
   declarations: [
      BookingComponent
   ],
   imports: [
      CommonModule,
      BookingRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      SharedModule             
   ],
   providers: [
     ScrollService,
     {
       provide: Renderer2,
       useFactory: (rendererFactory: RendererFactory2) => rendererFactory.createRenderer(null, null),
       deps: [RendererFactory2]
     }
   ]
 })
 export class BookingModule { }