import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <mat-card class="special-dashboard-class">
      <mat-card-content class="card-content">
        <p>{{CardTitle}}</p>

        <p class="text-3xl font-semibold">{{CardNumber}}</p>

        <a routerLink="{{CardLink}}" class="{{CardClass}}">
         {{CardLinkTitle}}
        </a>
      </mat-card-content>
    </mat-card>
  `,
  styleUrls: ['../././../../styles/material.css']
})


export class CardComponent implements OnInit {
  @Input() CardTitle!: string;
  @Input() CardNumber!: number;
  @Input() CardLink!: any;
  @Input() CardClass!: any;
  @Input() CardLinkTitle!: string;

  constructor() {

  }

  ngOnInit(): void {

  }

}
