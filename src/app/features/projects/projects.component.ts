import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
   schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProjectsComponent {



}
