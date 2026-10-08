import { Component } from '@angular/core';

import { Header } from './header/header';
import { Footer } from './footer/footer';
import { BioComponent } from './bio/bio';
// SkillsComponent sahi kaam kar raha hai, usko aise hi rehne dein
import { SkillsComponent } from './skills/skills'; 

@Component({
  selector: 'app-root',
  imports: [Header, Footer, BioComponent, SkillsComponent],
  templateUrl: './app.html' 
})
export class App { 
  title = 'digital-card';
}