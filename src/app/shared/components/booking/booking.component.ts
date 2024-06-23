import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { BootstrapNotifyService } from 'src/app/core/services/bootstrapNotify/bootstrap-notify.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})

export class BookingModalComponent implements OnInit {
  selected!: Date | null;
  minDate: Date;
  timeRows: any[] = [
    '10:00am',
    '11:00am',
    '12:00am',
    '1:00pm',
    '2:00pm',
    '3:00pm',
    '4:00pm'
  ];
  focusedSpanIndex: number | null = null;
  @Input() modalIcon!: string;
  @Input() iconNeeded = false;
  @Input() bookingCall = true;
  @Input() modalHeaderTitle: string = 'Book a Discovery Call';
  @Input() modalMessage1: string = 'Time Zone: GMT-6:00';
  @Input() modalMessage2: string = 'Mountain Time Edmonton';
  @Input() actionBtnText!: string;
  @Input() closeBtnText!: string;
	@Input() closeBtnColor!: string;
	@Input() actionBtnColor!: string;

  @Output() modalAction: EventEmitter<any> = new EventEmitter<any>();
  @Output() closeModalAction: EventEmitter<any> = new EventEmitter<any>();

  constructor (
    public dialog: MatDialog,
    private _adapter: DateAdapter<any>,
    public bootstrapNotify: BootstrapNotifyService
  ) 
  { 
    this.minDate = new Date();
  }

  ngOnInit(): void {
    // Set the minimum date in the calendar
    this._adapter.setLocale('en'); // Adjust locale if necessary
  }

  closeModal(): void {
    this.closeModalAction.emit();
  }

  closeBookingModal(): void {
    this.dialog.closeAll();
  }

  action(): void {
    this.modalAction.emit();
  }

  toggleFocus(event: MouseEvent, index: number, time: any): void {
    event.preventDefault();
    this.focusedSpanIndex = this.focusedSpanIndex === index ? null : index;
    console.log(this.focusedSpanIndex, time);
  }

  bookCallNow() {
    console.log("Call");
    console.log(this.selected);
    console.log(this.focusedSpanIndex);
    if (this.selected === undefined) {
      this.bootstrapNotify.error("Kindly Select a Date to Continue");
    } else if (this.focusedSpanIndex === null) {
      this.bootstrapNotify.error("Kindly Select a Time to Continue");
    } else {
      this.bootstrapNotify.success("Date & Time Booked!!");
      this.closeBookingModal();
    }
  }

}
