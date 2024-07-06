// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey = 'token';
  private nameKey = 'name';
  private id = 'id';
  roleAs: any;
  private roleKey = 'role';
  constructor() {}

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  login(token: string, name: string, id: any, role: any): void {
    localStorage.setItem('token', token);
    localStorage.setItem('name', name);
    localStorage.setItem('id', id.toString()); // Ensure id is stored as a string if necessary
    localStorage.setItem('role', role); // Store role directly as a string
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
  // getRole(): string {
  //   return localStorage.getItem('role') || 'guest'; // 'guest' as a fallback role
  // }
  getRole(): string | null {
    return localStorage.getItem(this.roleKey);
  }
}
