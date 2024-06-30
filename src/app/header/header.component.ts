// src/app/header/header.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private router: Router, private authService: AuthService) {}

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToSignUp() {
    this.router.navigate(['/signup']);
  }

  isLogined() {
    return this.authService.isAuthenticated();
  }

  getUserName() {
    return this.authService.getUserName();
  }

  logout() {
    this.router.navigate(['/logout']);
  }
}
