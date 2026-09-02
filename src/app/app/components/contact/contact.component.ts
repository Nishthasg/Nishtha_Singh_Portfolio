import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
  private readonly http = inject(HttpClient);

  /** Served from `src/assets/` → use `assets/…` in the template. */
  readonly contactAsideImageUrl = 'assets/pexels-pixabay-221043.jpg';
  readonly inboxEmail = 'nishthasingh116@gmail.com';

  submitted = false;
  sending = false;
  sendStatus: 'idle' | 'success' | 'error' = 'idle';

  readonly contactForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    message: ['', [Validators.required, Validators.minLength(10)]],
    website: ['']
  });

  onSubmit(): void {
    this.submitted = true;
    this.sendStatus = 'idle';
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const { name, email, phone, message, website } = this.contactForm.getRawValue();
    if (website.trim()) {
      this.sendStatus = 'success';
      this.resetForm();
      return;
    }

    this.sending = true;
    this.http
      .post<{ success?: string }>(
        `https://formsubmit.co/ajax/${this.inboxEmail}`,
        {
          name,
          email,
          phone: phone.trim() || '—',
          message,
          _subject: `Portfolio inquiry — ${name}`,
          _template: 'table',
          _captcha: 'false',
          _replyto: email
        },
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }
        }
      )
      .pipe(
        finalize(() => {
          this.sending = false;
        })
      )
      .subscribe({
        next: () => {
          this.sendStatus = 'success';
          this.resetForm();
        },
        error: () => {
          this.sendStatus = 'error';
        }
      });
  }

  private resetForm(): void {
    this.contactForm.reset({
      name: '',
      email: '',
      phone: '',
      message: '',
      website: ''
    });
    this.submitted = false;
  }
}
