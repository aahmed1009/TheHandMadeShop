// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey = 'token';
  private nameKey = 'name';
  private id = 'id';

  constructor() {}

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  login(token: string, name: string, id: any): void {
    localStorage.setItem(this.tokenKey, token);
    localStorage.setItem(this.nameKey, name);
    localStorage.setItem(this.id, id);
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.nameKey);
  }
  getUserId(): number {
    const user = JSON.parse(localStorage.getItem('id') || '{}');
    return user;
  }
  getUserName(): string | null {
    return localStorage.getItem(this.nameKey);
  }
}
