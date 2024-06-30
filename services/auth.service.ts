// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey = 'token';
  private nameKey = 'name';

  constructor() {}

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  login(token: string, name: string): void {
    localStorage.setItem(this.tokenKey, token);
    localStorage.setItem(this.nameKey, name);
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.nameKey);
  }

  getUserName(): string | null {
    return localStorage.getItem(this.nameKey);
  }
}
