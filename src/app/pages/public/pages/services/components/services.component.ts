import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BootstrapNotifyService } from 'src/app/core/services/bootstrapNotify/bootstrap-notify.service';
import { BookingModalComponent } from 'src/app/shared/components/booking/booking.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {



  constructor(
    private router: Router,
    public dialog: MatDialog,
    private bootstrapNotifyService: BootstrapNotifyService
  ) {

  }

  ngOnInit(): void {
  }

  viewPricing() {
    this.router.navigateByUrl('/pricing');
    console.log("we are heading to Pricing");
  }

  bookingCall() {
    this.dialog.open(BookingModalComponent);
    // this.router.navigateByUrl('/booking');
    console.log("we are heading to booking");
  }
}
