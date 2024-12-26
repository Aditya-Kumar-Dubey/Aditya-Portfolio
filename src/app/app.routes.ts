import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { authRedirectGuard } from './core/guards/auth-redirect.guard';
import { SignInComponent } from './features/auth/components/sign-in/sign-in.component';
import { LandingPageComponent } from './features/Landing/landing-page/landing-page.component';
import { ProfileComponent } from './features/auth/components/profile/profile.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';

export const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'landing' },
  // { path: 'landing', component: LandingPageComponent },

  { path: '**', redirectTo: 'login' }

  // ===================



];
