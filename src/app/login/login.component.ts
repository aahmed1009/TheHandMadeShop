// src/app/login/login.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'services/api.service';
import { AuthService } from 'services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private api: ApiService,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const email = params['email'];
      const password = params['password'];

      if (email) {
        this.loginForm.get('email')?.setValue(email);
      }
      if (password) {
        this.loginForm.get('password')?.setValue(password);
      }
    });
  }

  loginUser(): void {
    if (this.loginForm.valid) {
      this.api.insert_user(this.loginForm.value).subscribe({
        next: (res: any) => {
          if (res['message'] === 'Success') {
            this.authService.login(
              res['token'],
              res['name'],
              res['id'],
              res['role']
            );
            this.router.navigate(['/']);
          } else {
            this.errorMessage =
              res['error'] || 'Login failed. Please try again.';
          }
        },
        error: (err: any) => {
          this.errorMessage =
            err.error?.message || 'An error occurred. Please try again.';
        },
      });
    }
  }

  onSubmit(): void {
    this.errorMessage = null; // Reset error message
    this.loginUser();
  }
}
