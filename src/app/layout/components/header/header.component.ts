import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { RouterModule } from '@angular/router';
import { faHome, faUser, faFileAlt, faBriefcase, faImage, faEnvelope, faTimes, faMoon, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

    constructor(public authService: AuthService) {

    }

    faHome = faHome;
    faUser = faUser;
    faFileAlt = faFileAlt;
    faBriefcase = faBriefcase;
    faImage = faImage;
    faEnvelope = faEnvelope;
    faTimes = faTimes;
    faMoon = faMoon;
    faBars = faBars;

}
