import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutComponent } from "../../about-us/about/about.component";
import { SkillsComponent } from "../../skills/skills/skills.component";
import { QualificationComponent } from "../../qualification/qualification/qualification.component";
import { ProjectsComponent } from "../../projects/projects.component";
import { ContactComponent } from "../../contact/contact.component";


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    AboutComponent,
    SkillsComponent,
    QualificationComponent,
    ProjectsComponent,
    ContactComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
}
