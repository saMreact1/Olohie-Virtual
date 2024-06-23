import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-small-transparent-button',
  template : `<button
  [type]="type"
  (click)="onClick()"  [disabled]="isDisabled"
  class="btn"
><mat-icon>{{ buttonIcon }}</mat-icon>
  <span>{{ buttonText }}</span>
</button>
  `,
    styleUrls: ['./small-transparent-button.component.css']
})
export class SmallTransparentButtonComponent implements OnInit {
  @Input()
	set text(name: string) {
		this.buttonText = name
	}
	get name(): string {
		return this.buttonText;
	}

	@Input() color: string = '0068B4';
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
