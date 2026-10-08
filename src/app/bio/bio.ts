import { Component } from '@angular/core';

@Component({
  selector: 'app-bio',
  imports: [],
  templateUrl: './bio.html',
  styleUrl: './bio.css'
})
export class BioComponent {
  // Define variables just like a C# class
  name: string = 'Your Name';
  role: string = '.NET & Angular Developer';
  description: string = 'Building robust backend systems with C# and learning modern frontend development with Angular.';
}