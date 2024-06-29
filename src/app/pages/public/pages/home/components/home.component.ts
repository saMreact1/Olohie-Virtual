import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BootstrapNotifyService } from 'src/app/core/services/bootstrapNotify/bootstrap-notify.service';
import { MatDialog } from '@angular/material/dialog';
import { BookingModalComponent } from 'src/app/shared/components/booking/booking.component';
import { ScrollService } from 'src/app/core/services/scroll.service';
// import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { v4 as uuidv4 } from 'uuid';
import { Timestamp } from '@angular/fire/firestore';
import { LoaderService } from 'src/app/core/loader/loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('animateSvg', [
      state('start', style({
        opacity: 0,
        transform: 'scale(0.5)'
      })),
      state('end', style({
        opacity: 1,
        transform: 'scale(1)'
      })),
      transition('start => end', [
        animate('4000ms ease-out')
      ])
    ])
  ]  
})
export class HomeComponent implements OnInit {
  isHovered: boolean = false; // Track hover state
  bookingCallModal: boolean = false;
  svgSource: string = 'original'; // Original SVG source
  animationState: string = 'start'; // Initial state
  errorMessage: string = '';
  contactForm!: FormGroup;
  servicesGridItems = [
    {
      title: 'CUSTOMER SERVICE SUPPORT',
      firstSvg: 'assets/icons/customer-service.svg',
      alt: 'CUSTOMER SERVICE SUPPORT SVG',
      description: 'Our dedicated team is committed to understanding your unique needs and delivering solutions that help you succeed. Whether you need assistance with administrative tasks, HR management, or social media marketing, we\'ve got you covered.',
      svgOriginal: 'assets/icons/short-arrow.svg',
      svgHovered: 'assets/icons/long-arrow.svg',
      svgSource: 'original'
    },
    {
      title: ' SOCIAL MEDIA MANAGEMENT',
      firstSvg: 'assets/icons/social-media.svg',
      alt: 'SOCIAL MEDIA MANAGEMENT SVG',
      description: 'Page Management, Group Management, Content creation, Scheduling Posts, Interaction/engagement with comments on posts & and direct messages. Processing orders etc.',
      svgOriginal: 'assets/icons/short-arrow.svg',
      svgHovered: 'assets/icons/long-arrow.svg',
      svgSource: 'original'
    },
    {
      title: 'HUMAN RESOURCES',
      firstSvg: 'assets/icons/human-resource.svg',
      alt: 'HUMAN RESOURCES SVG',
      description: 'Recruitment, Reference and Background checks, Onboarding, Offboarding, Employee Relations, Responding to staff inquiries etc.',
      svgOriginal: 'assets/icons/short-arrow.svg',
      svgHovered: 'assets/icons/long-arrow.svg',
      svgSource: 'original'
    }
    // Add more grid items as needed
  ];

  serviceList: any[] = [
    "CUSTOMER SERVICE SUPPORT",
    "INFORMATION TECHNOLOGY",
    "HUMAN RESOURCES",
    "BRANDING",
    "SOCIAL MEDIA MANAGEMENT",
    "EMAIL MANAGEMENT",
    "MEETINGS AND PRESENTATION",
    "RESEARCH",
    "Other Services"
  ]

  feedbackItems: any[] = [
    {
      imageSrc: 'assets/img/wardrobe.jpg',
      brief: 'Working with Olo for my business on Instagram turned things around, she is very detailed to the tiny details, she is amazing to work with.',
      name: 'OVY',
      role: 'FOUNDER OVYS CHILDRENS WARDROBE LTD.'
    },
    {
      imageSrc: 'assets/img/momdadme.jpg',
      brief: '"Olo changed my business! I don\'t know why I waited so long to find help! You will not regret working with her"',
      name: 'LOLA',
      role: 'FOUNDER OF MOM DAD & ME.'
    },
    {
      imageSrc: 'assets/img/tinu.jpg',
      brief: '"If you are deciding whether to hire Olo as your VA, don\'t hesitate!."',
      name: 'ATINUKE',
      role: 'FOUNDER OF TINUS COLLECTIONS'
    }
  ];

  blogGridItems = [
    {
      firstSvg: 'assets/icons/booking1.svg',
      title: 'How Virtual Assistants Revolutionize HR Management',
      description: 'In todays fast-paced business environment, staying on top of HR tasks can be overwhelming. But fear not with the rise of virtual assistants, managing HR processes has never been easier.',
    },
    {
      firstSvg: 'assets/icons/booking2.svg',
      title: '5 Essential Tips for Effective HR Outsourcing',
      description: 'In todays fast-paced business environment, staying on top of HR tasks can be overwhelming. But fear not with the rise of virtual assistants, managing HR processes has never been easier.',
    },
    {
      firstSvg: 'assets/icons/booking3.svg',
      title: 'Navigating HR Challenges in a Remote World',
      description: 'In todays fast-paced business environment, staying on top of HR tasks can be overwhelming. But fear not with the rise of virtual assistants, managing HR processes has never been easier.',
    }
  ];

  constructor(
    private router: Router,
    protected formBuilder: FormBuilder,
    public dialog: MatDialog,
    private bootstrapNotifyService: BootstrapNotifyService,
    protected loaderService: LoaderService,
    private scrollService: ScrollService,
    public firestore: Firestore
  ) {

  }

  ngOnInit(): void {
    setTimeout(() => {
      this.animationState = 'end'; // Change state after delay
    }, 1);

    // this.firestoreForm = this.fireStore.collection('')

    this.contactForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      subject: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required])
    });
  }
  
  // Function to toggle hover state
  // toggleHover() {
  //   this.isHovered = !this.isHovered;
  //   this.svgSource = this.isHovered ? 'hovered' : 'original';
  // }  
  toggleHover(item: any): void {
    if (item.svgSource === 'original') {
      item.svgSource = 'hovered';
    } else {
      item.svgSource = 'original';
    }
  }

  aboutPage() {
    this.scrollService.scrollToTop();
  }

  servicesCall() {
    this.router.navigateByUrl('/services');
    this.scrollService.scrollToTop();
    console.log("we are heading to services");
  }

  blogCall() {
    this.router.navigateByUrl('/blog');
    this.scrollService.scrollToTop();
    console.log("we are heading to blogs");
  }

  bookingCall() {
    // this.dialog.open(BookingModalComponent);
    // this.router.navigateByUrl('https://olohievirtual.as.me/schedule.php');
    window.open('https://olohievirtual.as.me/schedule.php', '_blank');
    console.log("we are heading to booking");
  }

  async processEmail() {
    if (this.contactForm.invalid) {
      this.bootstrapNotifyService.info("Kindly Fill in the Required Fields on the Contact Form!");
    } else {
      this.loaderService.setLoading(true);
      console.log(this.contactForm.value);
      // this.bootstrapNotifyService.info("Email API currently been worked on!");
      try {
        const id = uuidv4();
        const timestamp = Timestamp.now();
        
        const formDataWithIdAndTimestamp  = { id, timestamp, ...this.contactForm.value };

        await addDoc(collection(this.firestore, 'contactDetails'), formDataWithIdAndTimestamp);
        this.bootstrapNotifyService.success("Email sent successfully to hello@olohievirtual.com!!");
        this.loaderService.setLoading(false);
        this.contactForm.reset();
        // const querySnapshot = await getDocs(query(collection(this.firestore, 'contactDetails'), orderBy('timestamp', 'desc')));
      } catch (error) {
        this.loaderService.setLoading(false);
        console.error("Error sending email:", error);
        this.bootstrapNotifyService.error("Failed to send email. Please try again later.");
      }
    }
  }

  updateErrorMessage() {
    let emailValue: any = this.contactForm.get('email');
    if (emailValue.hasError('required')) {
      this.errorMessage = 'You must enter a value';
    } else if (emailValue.hasError('email')) {
      this.errorMessage = 'Not a valid email';
    } else {
      this.errorMessage = '';
    }
  }

  navigateIcons(iconValue: string) {
    switch (iconValue) {
      case 'email':
        // Navigate to the email link
        window.open('mailto:hello@olohievirtual.com', '_blank');
        break;
      case 'instagram':
        // Navigate to the Instagram profile link
        window.open('https://www.instagram.com/olohievirtual/', '_blank');
        break;
      case 'facebook':
        // Navigate to the Facebook profile link
        window.open('https://www.facebook.com/profile.php?id=61556478655312', '_blank');
        break;
      default:
        console.log('Invalid iconValue:', iconValue);
    }
  }
}