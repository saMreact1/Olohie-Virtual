import { NgModule, Renderer2, RendererFactory2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from 'src/app/shared/shared.module';

// Services
import { ScrollService } from 'src/app/core/services/scroll.service';

// Component
import { HomeComponent } from './components/home.component';

// Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

// Firebase

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
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
 
export class HomeModule { }