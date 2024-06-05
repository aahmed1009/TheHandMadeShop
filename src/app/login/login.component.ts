import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
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

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      // Handle form submission
      // If login fails due to unregistered account
      this.router.navigate(['/sign-up']);
    }
  }
}
