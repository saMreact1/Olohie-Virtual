import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BootstrapNotifyService } from 'src/app/core/services/bootstrapNotify/bootstrap-notify.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent {
  adminGridItems: any[] = [
    {
      class: 'first-grid',
      imageSrc: 'assets/icons/bronze.svg',
      title: 'BRONZE',
      amount: '$500',
      duration: 'Up to 15hrs/month',
      specs: 'All administrative services are included',
      buttonTitle: 'Get in touch',
      buttonClass: 'first-button'
    },
    {
      class: 'second-grid',
      imageSrc: 'assets/icons/silver.svg',
      title: 'SILVER',
      amount: '$1,000',
      duration: 'Up to 20hrs/month',
      specs: 'All administrative services are included',
      buttonTitle: 'Get in touch',
      buttonClass: 'second-button'
    },
    {
      class: 'third-grid',
      imageSrc: 'assets/icons/gold.svg',
      title: 'GOLD',
      amount: '$1,500',
      duration: 'Up to 40hrs/month',
      specs: 'All administrative services are included',
      buttonTitle: 'Get in touch',
      buttonClass: 'third-button'
    }
  ];

  socialGridItems: any[] = [
    {
      class: 'first-grid',
      imageSrc: 'assets/icons/bronze.svg',
      title: 'BRONZE',
      amount: '$500',
      duration: 'Monthly',
      specs: [
        'Management of 1 Social Media Platform',
        'Creation of high quality content using Canva',
        'Scheduling of 2 posts per week on 1 Platform ( 8 Posts in total in a month)'
      ],
      buttonTitle: 'Get in touch',
      buttonClass: 'first-button'
    },
    {
      class: 'second-grid',
      imageSrc: 'assets/icons/gold.svg',
      title: 'GOLD',
      amount: '$1,900',
      duration: 'Monthly',
      specs: [
        'Management of 3 Social Media Platform',
        'Creation of high quality content using Canva + Creation/Editing of Reels Videos',
        'Scheduling of 4 Posts per week on 3 Platforms (48 Posts in total in a month)',
        'Daily & Weekly Engagements with your audience',
        'Responding to Customers Comments & Direct Messages.',
        'Live support, responding to questions on live chat'
      ],
      buttonTitle: 'Get in touch',
      buttonClass: 'second-button'
    },
    {
      class: 'third-grid',
      imageSrc: 'assets/icons/silver.svg',
      title: 'SILVER',
      amount: '$1,000',
      duration: 'Monthly',
      specs: [
        'Management of 2 Social Media Platform',
        'Creation of high quality content using Canva',
        'Scheduling of 3 posts per week on 2 Platform ( 24 Posts in total in a month)',
        'Weekly Engagements with your audience'
      ],
      buttonTitle: 'Get in touch',
      buttonClass: 'third-button'
    }
  ];

  constructor(
    private router: Router,
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
    this.router.navigateByUrl('/booking');
    console.log("we are heading to booking");
  }
}
