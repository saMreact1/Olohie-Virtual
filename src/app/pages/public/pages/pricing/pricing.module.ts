import { NgModule, Renderer2, RendererFactory2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingRoutingModule } from './pricing-routing.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from 'src/app/shared/shared.module';

// Services
import { ScrollService } from 'src/app/core/services/scroll.service';

// Component
import { PricingComponent } from './components/pricing.component';

// Material

@NgModule({
    declarations: [
      PricingComponent
    ],
    imports: [
      CommonModule,
      PricingRoutingModule,
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
 
 export class PricingModule { }