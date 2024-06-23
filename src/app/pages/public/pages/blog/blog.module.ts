import { NgModule, Renderer2, RendererFactory2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from 'src/app/shared/shared.module';

// Services
import { ScrollService } from 'src/app/core/services/scroll.service';

// Component
import { BlogComponent } from './components/blog.component';

// Material

@NgModule({
   declarations: [
      BlogComponent
   ],
   imports: [
      CommonModule,
      BlogRoutingModule,
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
 export class BlogModule { }