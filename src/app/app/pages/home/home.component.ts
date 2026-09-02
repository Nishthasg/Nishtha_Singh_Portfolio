import { DOCUMENT } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { fromEvent } from 'rxjs';
import { auditTime } from 'rxjs/operators';
import { ScrollSpyService } from '../../../services/scroll-spy.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements AfterViewInit {
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);
  private readonly scrollSpy = inject(ScrollSpyService);

  private readonly sectionIds = ['about', 'skills', 'experience', 'projects', 'contact'] as const;
  /** Offset below sticky header so the “current” section matches what the user is reading */
  private readonly scrollOffset = 108;

  ngAfterViewInit(): void {
    const win = this.document.defaultView;
    if (!win) {
      return;
    }

    const run = () => this.updateActiveSection(win);

    requestAnimationFrame(() => run());

    fromEvent(win, 'scroll', { passive: true })
      .pipe(auditTime(48), takeUntilDestroyed(this.destroyRef))
      .subscribe(() => run());
  }

  private updateActiveSection(win: Window): void {
    const scrollY = win.scrollY;
    const marker = scrollY + this.scrollOffset;
    let active: string = 'top';

    for (const id of this.sectionIds) {
      const el = this.document.getElementById(id);
      if (!el) {
        continue;
      }
      const top = el.getBoundingClientRect().top + scrollY;
      if (marker >= top) {
        active = id;
      }
    }

    this.scrollSpy.setActive(active);
  }
}
