import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);

  /** Served from `src/assets/` → use `assets/…` in the template. */
  readonly contactAsideImageUrl = 'assets/pexels-pixabay-221043.jpg';

  submitted = false;

  readonly contactForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  onSubmit(): void {
    this.submitted = true;
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    const { name, email, phone, message } = this.contactForm.getRawValue();
    const subject = encodeURIComponent(`Portfolio inquiry — ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone || '—'}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:nishthasingh116@gmail.com?subject=${subject}&body=${body}`;
  }
}
