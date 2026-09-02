import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceComponent {
  experience: Array<{
    company: string;
    role: string;
    period: string;
    highlights: string[];
    tech: string[];
  }> = [
    {
      company: 'Pactap (Simplify Packaging)',
      role: 'Frontend Developer',
      period: 'Dec 2025 — Present',
      highlights: [
        'Architected and developed a responsive B2B procurement and packaging platform using Angular, TypeScript, Bootstrap, HTML5, and CSS3',
        'Integrated RESTful APIs using Angular HttpClient for dynamic data rendering, data binding, and seamless user interactions.',
        'Developed reusable Angular components and responsive UI modules, ensuring consistency across screens and improving maintainability.',
        'Leveraged Cursor AI for debugging, code optimization, and faster issue resolution, improving overall development productivity.'
      ],
      tech: ['Angular', 'Node.js', 'TypeScript', 'RxJS', 'JWT', 'RBAC', 'REST APIs', 'State management']
    },
    {
      company: 'Silver Touch Technologies Ltd.',
      role: 'Software Engineer',
      period: 'Jun 2024 — Jul 2025',
      highlights: [
        'Engineered an enterprise Pension Management Portal using Angular, TypeScript, Angular Material, and Bootstrap, improving pensioner self-service efficiency.',
        'Implemented secure login and signup authentication modules for managing access to sensitive pensioner data.',
        'Developed and integrated RESTful APIs to manage pensioner records and monthly transactions across 50 districts.',
        'Collaborated with cross-functional teams to debug issues, optimize application performance, and deliver responsive, user-friendly interfaces.'
      ],
      tech: ['Angular', 'Java', 'RxJS', 'TypeScript', 'Angular Material', 'REST APIs']
    },
  ];

  trackByCompany(index: number, item: { company: string }) {
    return item.company;
  }
}
