import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent {
  skillGroups: Array<{
    title: string;
    items: Array<{ label: string; icon: string }>;
  }> = [
    {
      title: 'Languages',
      items: [
        { label: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { label: 'JavaScript (ES6+)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { label: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { label: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        {label: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg'}
      ]
    },
    {
      title: 'Frameworks',
      items: [
        { label: 'Angular (16+)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg' },
        { label: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { label: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg'}
      ]
    },
    {
      title: 'Libraries & UI',
      items: [
        { label: 'RxJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rxjs/rxjs-original.svg' },
        { label: 'SCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
        { label: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
        { label: 'Angular Material', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' }
      ]
    },
    {
      title: 'Databases',
      items: [
        { label: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { label: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg' }
      ]
    },
    {
      title: 'Tools & AI',
      items: [
        { label: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { label: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { label: 'Gitlab', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg' },
        { label: 'Jira', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' },
        { label: 'Cursor', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' }
      ]
    }
  ];

  trackByFn(index: number, item: { label: string }) {
    return item.label;
  }

  trackGroup(index: number, group: { title: string }) {
    return group.title;
  }
}