import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
blogGridItems: any[] = [
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
  },
  {
    firstSvg: 'assets/icons/booking1.svg',
    title: 'How Virtual Assistants Revolutionize HR Management',
    description: 'In todays fast-paced business environment, staying on top of HR tasks can be overwhelming. But fear not with the rise of virtual assistants, managing HR processes has never been easier.',
  }
];
  
  
// blogCall() {
//   this.router.navigateByUrl('/blog');
//   this.scrollService.scrollToTop();
//   console.log("we are heading to blogs");
// }

}
