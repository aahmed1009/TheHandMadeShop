import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private router: Router) {}

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToSignUp() {
    this.router.navigate(['/signup']);
  }
  isLogined() {
    // return this.route.url == '/login' || this.route.url == '/home';
    return this.router.url == '/login' || this.router.url == '/signup';
  }
}
