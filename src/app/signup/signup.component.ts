import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'services/api.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signupForm: FormGroup;
  message = '';
  message2 = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private api: ApiService
  ) {
    this.signupForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.message = '';
    this.message2 = '';
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
    }
    if (this.signupForm.valid) {
      const email = this.signupForm.get('email')!.value; //  non-null assertion
      const password = this.signupForm.get('password')!.value; //  non-null assertion

      this.api.register_user(this.signupForm.value).subscribe({
        next: (data: any) => {
          console.log(data['message']);
          if (data['message'] == ' Registration successful') {
            this.message = 'Registration successful';
          } else if (data['message'] === 'Email already exists') {
            this.message2 = 'Email already exists';
          } else {
            this.message2 = 'User are not added successfully';
          }
        },
      });

      //  logic
      // Redirect to login with pre-filled email and password
      this.router.navigate(['/login'], { queryParams: { email, password } });
    }
  }
}
