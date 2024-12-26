import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey = 'authToken';

  constructor(private router: Router) {

  }

  isStorageAvailable(): boolean {
    return typeof window !== 'undefined' && !!window.localStorage;
  }

  // Simulate login and store token
  login(email: string, password: string): boolean {
    if (email && password) {
      const mockToken = email + password; // Replace with actual API token
      if (this.isStorageAvailable()) {
        localStorage.setItem(this.tokenKey, btoa(mockToken));
      }
      return true;
    }
    return false;
  }

  // Check if user is logged in
  isLoggedIn(): boolean {
    if (this.isStorageAvailable()) {
      return !!localStorage.getItem(this.tokenKey);
    }
    return false;
  }

  // Logout user
  logout(): void {
    if (this.isStorageAvailable()) { 
      localStorage.removeItem(this.tokenKey);
      this.router.navigate(['/login']);
    }
  }
}
