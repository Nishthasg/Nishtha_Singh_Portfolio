import { AfterViewInit, Directive, ElementRef, OnDestroy, inject } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]'
})
export class ScrollRevealDirective implements AfterViewInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    const host = this.el.nativeElement;
    host.classList.add('scroll-reveal');

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          host.classList.add('scroll-reveal--visible');
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -6% 0px' }
    );
    this.observer.observe(host);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
