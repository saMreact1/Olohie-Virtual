import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-large-red-button',
  template : `
    <button
      [type]="type"
      (click)="onClick()"
      [ngStyle]="{ 'background-color': isDisabled ? '#ECE8E8' : '#E70000' }"
      [disabled]="isDisabled"
      class="btn">
        <span *ngIf="iconNeeded">
          <mat-icon class="icon">
            {{ buttonIcon }}
          </mat-icon>
          <span>
            {{ buttonText }}
          </span>
        </span>
        <span *ngIf="!iconNeeded">
            {{ buttonText }}
        </span>
    </button>
  `,
  styleUrls: ['./large-red-button.component.css']
})
export class LargeRedButtonComponent implements OnInit {
  @Input()
	set text(name: string) {
		this.buttonText = name;
	}
	get name(): string {
		return this.buttonText;
	}

	@Input() color: string = '0068B4';
  @Input() iconNeeded = false;
	@Input() type: string = 'button';
	@Input() buttonIcon: string = '';
  @Output() btnClick = new EventEmitter();
	@Input() isDisabled!: boolean;

	public buttonText = '';
  constructor() { }

  ngOnInit() {
  }

  onClick() {
		this.btnClick.emit();
	}

}
