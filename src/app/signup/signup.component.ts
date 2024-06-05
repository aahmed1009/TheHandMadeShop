import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.signupForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
    }
    if (this.signupForm.valid) {
      const email = this.signupForm.get('email')!.value; //  non-null assertion
      const password = this.signupForm.get('password')!.value; //  non-null assertion
      //  logic
      // Redirect to login with pre-filled email and password
      this.router.navigate(['/login'], { queryParams: { email, password } });
    }
  }
}
