import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./layout/components/header/header.component";
import { AuthService } from './core/services/auth.service';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './features/Landing/landing-page/landing-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule ,RouterOutlet, HeaderComponent, LandingPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  constructor(public authService: AuthService) {} 

  toggleTheme(isDarkMode: boolean): void {
    const theme = isDarkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
  }

}
