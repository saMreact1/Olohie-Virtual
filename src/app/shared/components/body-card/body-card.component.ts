import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-body-card',
  template: `
    <mat-card class="body-card">
      <mat-card-content class="mat-card-content-class">
        <div class="card-div">
        <ng-container [ngTemplateOutlet]="bodyTemplate">
        </ng-container>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styleUrls: ['../././../../styles/card-reuse.css']
})


export class BodyCardComponent implements OnInit {
  @Input() CardSvg!: string;
  @Input() CardName!: string;
  @Input() bodyTemplate!: TemplateRef<any>;

  constructor() {

  }

  ngOnInit(): void {

  }

}
