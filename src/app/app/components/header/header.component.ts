import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ScrollSpyService } from '../../../services/scroll-spy.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  menuOpen = false;
  activeSectionId = 'top';

  readonly navLinks: ReadonlyArray<{ label: string; href: string; id: string }> = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Contact', href: '#contact', id: 'contact' }
  ];

  private readonly document = inject(DOCUMENT);
  private readonly scrollSpy = inject(ScrollSpyService);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    this.scrollSpy.activeSection$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((id) => {
      this.activeSectionId = id;
      this.cdr.markForCheck();
    });
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    this.syncBodyScroll();
  }

  closeMenu(): void {
    this.menuOpen = false;
    this.syncBodyScroll();
  }

  private syncBodyScroll(): void {
    this.document.body.style.overflow = this.menuOpen ? 'hidden' : '';
  }
}
