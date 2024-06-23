import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Components
// Components
import { CardComponent } from './components/cards/cards.component';
import { ActionModalComponent } from './components/action-modal/action-modal.component';
import { ModalComponent } from './components/modal/modal.component';
import { BodyCardComponent } from './components/body-card/body-card.component';
import { LargeRedButtonComponent } from './components/buttons/large-red-button/large-red-button.component';
import { MediumRedButtonComponent } from './components/buttons/medium-red-button/medium-red-button.component';
import { LargeTransparentButtonComponent } from './components/buttons/large-transparent-button/large-transparent-button.component';
import { MediumTransparentButtonComponent } from './components/buttons/medium-transparent-button/medium-transparent-button.component';
import { SmallTransparentButtonComponent } from './components/buttons/small-transparent-button/small-transparent-button.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/navigation/nav.component';


// Angular Material
// Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { BookingModalComponent } from './components/booking/booking.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    CardComponent,
    ActionModalComponent,
    ModalComponent,
    BodyCardComponent,
    LargeRedButtonComponent,
    MediumRedButtonComponent,
    LargeTransparentButtonComponent,
    MediumTransparentButtonComponent,
    SmallTransparentButtonComponent,
    FooterComponent,
    NavComponent,
    BookingModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule
  ],
  exports: [
    CardComponent,
    ActionModalComponent,
    ModalComponent,
    BodyCardComponent,
    LargeRedButtonComponent,
    MediumRedButtonComponent,
    LargeTransparentButtonComponent,
    MediumTransparentButtonComponent,
    SmallTransparentButtonComponent,
    FooterComponent,
    NavComponent,
    BookingModalComponent
  ]
})
export class SharedModule { }
