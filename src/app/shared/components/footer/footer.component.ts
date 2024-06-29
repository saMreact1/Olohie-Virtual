import { Component, OnInit, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ScrollService } from 'src/app/core/services/scroll.service';

@Component({
  selector: 'app-footer',
  template: `
    <div class="footer">
      <div class="back-to-top">
        <img src="assets/icons/back_to_top.svg" alt="" width="65" height="65" (click)="scrollToTop()">
      </div>
      <nav class="links">
        <a (click)="scrollToTop()" *ngIf="!isCurrentComponent('HomeComponent')" [routerLink]="['']" routerLinkActive="active">
          <span>Home</span>
        </a>
        
        <a (click)="scrollToTop()" *ngIf="!isCurrentComponent('AboutComponent')" [routerLink]="['/about']" routerLinkActive="active">
          <span>About Us</span>
        </a>
        
        <a (click)="scrollToTop()" *ngIf="!isCurrentComponent('ServicesComponent')" [routerLink]="['/services']" routerLinkActive="active">
          <span>Services</span>
        </a>
        
        <a (click)="scrollToTop()" *ngIf="!isCurrentComponent('PricingComponent')" [routerLink]="['/pricing']" routerLinkActive="active">
          <span>Pricing</span>
        </a>
        
        <a (click)="scrollToTop()" *ngIf="!isCurrentComponent('BlogComponent')" [routerLink]="['/blog']" routerLinkActive="active">
          <span>Blog</span>
        </a>
      </nav>
      <div class="business-name" #businessNameRef>
        <span class="virtual">
          OLOHIE VIRTUAL
        </span>

        <span class="copyright">
          &#169; 2024 OLOHIE VIRTUAL INC
        </span>          
      </div>
    </div>
  `,
  styleUrls: ['../../../styles/footer.css']
})

export class FooterComponent implements OnInit, AfterViewInit {

  private observer!: MutationObserver;

  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    private elementRef: ElementRef,
    private scrollService: ScrollService
  ) {}

  ngOnInit(): void {
    // this.observeContainerSizeChanges();
  }

  ngAfterViewInit(): void {
    this.adjustFontSize();
    // this.adjustFontSize();
  }

  @HostListener('window:resize', ['$event'])
  @HostListener('window:orientationchange', ['$event']) // Listen for orientation change
  @HostListener('window:load', ['$event'])
  onResize(event: Event) {
    this.adjustFontSize();
    // this.observeContainerSizeChanges();
  }

  scrollToTop(): void {
    this.scrollService.scrollToTop();
  }

  private adjustFontSize(): void {
    const businessName: HTMLElement | null = this.elementRef.nativeElement.querySelector('.footer');
    if (businessName) {
      const virtualSpan: HTMLElement | null = businessName.querySelector('.virtual');
      if (virtualSpan) {
          const containerWidth: number = businessName.offsetWidth;

          // Calculate the new font size based on the container width
          // Assuming we want the font size to be around 10% of the container width
          const newFontSize: number = containerWidth * 0.105; 

          // Debugging logs
          console.log(`Container Width: ${containerWidth}px`);
          console.log(`New Font Size: ${newFontSize}px`);

          // Apply the new font size to the span
          virtualSpan.style.fontSize = `${newFontSize}px`;
      }
    }
  }

  // observeContainerSizeChanges(): void {
  //   const config = { attributes: true, childList: true, subtree: true };
  //   const callback: MutationCallback = (mutationsList, observer) => {
  //     this.adjustFontSize();
  //   };
  //   this.observer = new MutationObserver(callback);
  //   const businessName: HTMLElement = this.elementRef.nativeElement.querySelector('.business-name .virtual');
  //   this.observer.observe(businessName, config);

  //   // Force a reflow to ensure immediate rendering
  //   businessName.style.display = 'none';
  //   businessName.offsetHeight; // Trigger reflow
  //   businessName.style.display = '';
  // }

  // observeContainerSizeChanges(): void {
  //   const config = { attributes: true, childList: true, subtree: true };
  //   const callback: MutationCallback = (mutationsList, observer) => {
  //     this.adjustFontSize();
  //   };
  //   this.observer = new MutationObserver(callback);

  //   // Instead of observing a specific element, observe the body or window size
  //   const body: HTMLElement = document.body;
  //   this.observer.observe(body, config);
  // }

  // adjustFontSize(): void {
  //   const businessName: HTMLElement = this.elementRef.nativeElement.querySelector('.business-name');
  //   const span: HTMLElement = this.elementRef.nativeElement.querySelector('.business-name .virtual');
  //   const containerWidth: number = businessName.offsetWidth;
  //   console.log(containerWidth);

  //   // Get the font size ratio based on the container's width compared to the text width
  //   const fontSizeRatio: number = containerWidth / span.offsetWidth;

  //   // Get the computed font size of the span
  //   const computedFontSize: number = parseFloat(window.getComputedStyle(span).fontSize);

  //   // Calculate the new font size based on the ratio
  //   const newFontSize: number = computedFontSize * fontSizeRatio;
  //   console.log(newFontSize);

  //   // Set the new font size to the span
  //   span.style.fontSize = `${newFontSize}px`;
  // }
 
  isCurrentComponent(componentName: string): boolean {

    // Get the first segment of the current URL
    const currentRoute = this.router.url.split('/')[1];

    // Get the name of the current component
    const currentComponent = this.activatedRoute.component?.['name'];

    // Compare with provided component name
    return currentRoute === componentName.toLowerCase() || currentComponent === componentName;
  }
}
