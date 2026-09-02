import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ScrollSpyService {
  private readonly active = new BehaviorSubject<string>('top');

  readonly activeSection$ = this.active.asObservable();

  setActive(sectionId: string): void {
    const next = sectionId || 'top';
    if (this.active.value !== next) {
      this.active.next(next);
    }
  }
}
