import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-medium-transparent-button',
  template : `
    <button
      [type]="type"
      (click)="onClick()" [disabled]="isDisabled"
      class="btn {{BtnClass}}">
      <mat-icon *ngIf="iconNeeded">
        {{ buttonIcon }}
      </mat-icon>
      <span *ngIf="textNeeded"
        [style.color]="color">
        {{ buttonText }}
      </span>
    </button>
  `,
    styleUrls: ['./medium-transparent-button.component.css']
})
export class MediumTransparentButtonComponent implements OnInit {
  @Input()
	set text(name: string) {
		this.buttonText = name;
	}
	get name(): string {
		return this.buttonText;
	}

  @Input() BtnClass!: any;
	@Input() iconNeeded: boolean = false;
	@Input() textNeeded: boolean = false;
	@Input() color!: string;
	@Input() buttonIcon: string = '';
	@Input() type: string = 'button';
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
