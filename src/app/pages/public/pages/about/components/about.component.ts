import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BootstrapNotifyService } from 'src/app/core/services/bootstrapNotify/bootstrap-notify.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  servicesGridItems: any[] = [
    { 
      imageUrl: 'assets/img/service-image1.jpg',
      title: 'CUSTOMER SERVICE SUPPORT'
    },
    { 
      imageUrl: 'assets/img/service-image33.jpg',
      title: 'INFORMATION TECHNOLOGY'
    },
    // { 
    //   imageUrl: 'assets/img/service-image2.jpg',
    //   title: 'SOCIAL MEDIA MANAGEMENT'
    // },
    { 
      imageUrl: 'assets/img/service-image3.jpg',
      title: 'HUMAN RESOURCES'
    },
    { 
      imageUrl: 'assets/img/service-image4.jpg',
      title: 'EMAIL MANAGEMENT'
    },
    { 
      imageUrl: 'assets/img/service-image5.jpg',
      title: 'MEETINGS & PRESENTATION'
    },
    { 
      imageUrl: 'assets/img/service-image6.jpg',
      title: 'RESEARCH'
    }
  ];

  teamGridItems: any[] = [
    { 
      imageUrl: 'assets/img/face1.jpg',
      name: 'Olo Iruobe',
      role: 'FOUNDER'
    },
    { 
      imageUrl: 'assets/img/face2.jpg',
      name: 'Ayomide Iruobe',
      role: 'Senior Frontend Engineer'
    },
    { 
      imageUrl: 'assets/img/face3.jpg',
      name: 'Adesoji Oyewusi',
      role: 'Brand Specialist / Product Designer'
    }
  ];

  constructor(
    private bootstrapNotifyService: BootstrapNotifyService,
    private router: Router
  ) {

  }

  ngOnInit(): void {

  }

  servicesCall() {
    this.router.navigateByUrl('/services');
    console.log("we are heading to services");
  }
}
