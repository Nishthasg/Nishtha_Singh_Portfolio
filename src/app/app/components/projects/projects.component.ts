import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {
  projects: Array<{
    title: string;
    subtitle: string;
    bullets: string[];
    tags: string[];
    link?: string;
  }> = [
    {
      title: 'Rojgaar App',
      subtitle: 'A full-stack platform designed to connect local service providers with nearby customers.',
      bullets: [
        'Developed a full-stack worker discovery platform using Angular, Node.js, Express.js, and MongoDB, enabling users to find and connect with local service providers.',
        'Implemented category-based search and location filtering, allowing users to quickly discover relevant workers based on their service requirements and location.',
        'Designed detailed worker profile pages featuring experience, ratings, availability, pricing, and contact information to support informed service selection.'
      ],
      tags: ['Angular', 'TypeScript', 'Node.js', 'RxJS', 'RBAC', 'JWT', 'REST APIs', 'MongoDB', 'Express.js'],
      link: 'https://rojgaar-one.vercel.app/'
    },
    {
      title: 'Food Ordering Website',
      subtitle: 'A secure, responsive full-stack web application for seamless online food ordering and checkout.',
      bullets: [
        'Developed authentication, Food Ordering Platform with checkout functionalities while implementing responsive design principles.',
        'Applied JWT and Bcrypt.js for secure user authentication, reducing unauthorized access risks by 90% across login/signup features.',
        'Leveraged Bootstrap to engineer responsive, mobile-first interfaces, enhancing cross-platform usability and accelerating front-end development'
      ],
      tags: ['React', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap'],
      link: 'https://food-app-767c.onrender.com/'
    }
  ];

  trackByTitle(index: number, item: { title: string }) {
    return item.title;
  }
}
