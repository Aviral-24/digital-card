import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class SkillsComponent {
  // An array of your technical skills
  techSkills: string[] = [
    'C# & .NET Core',
    'PostgreSQL',
    'JavaScript',
    'Angular',
    'Docker',
    'REST APIs'
  ];
}