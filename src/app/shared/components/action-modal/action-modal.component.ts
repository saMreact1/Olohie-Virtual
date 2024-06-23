import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-action-modal',
  templateUrl: './action-modal.component.html',
  styleUrls: ['./action-modal.component.css']
})
export class ActionModalComponent implements OnInit {

  @Input() modalIcon!: string;
  @Input() iconNeeded = false;
  @Input() modalHeaderTitle!: string;
  @Input() modalMessage1!: any;
  @Input() modalMessage2!: string;
  @Input() actionBtnText!: string;
  @Input() closeBtnText!: string;
	@Input() closeBtnColor!: string;
	@Input() actionBtnColor!: string;

  @Output() modalAction: EventEmitter<any> = new EventEmitter<any>();
  @Output() closeModalAction: EventEmitter<any> = new EventEmitter<any>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.closeModalAction.emit();
  }

  action(): void{
    this.modalAction.emit();
  }

}
