import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'services/api.service';

@Component({
  selector: 'app-update-user-profile',
  templateUrl: './update-user-profile.component.html',
  styleUrls: ['./update-user-profile.component.css'],
})
export class UpdateUserProfileComponent implements OnInit {
  updateForm!: FormGroup;
  message: string = '';
  message2: string = '';
  userId: string = '';

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Get the user ID from the route
    this.route.paramMap.subscribe((params) => {
      this.userId = params.get('id') || ''; // Use the ID from the route

      // Load the user data using the user ID
      this.loadUserData(this.userId);
    });

    this.updateForm = this.fb.group({
      id: [this.userId, Validators.required], // Add id field
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  loadUserData(userId: string) {
    this.apiService.get_UsersDetails(`id=${userId}`).subscribe((data: any) => {
      if (data && data.length > 0) {
        this.updateForm.patchValue({
          id: data[0].id, // Set id value
          fullName: data[0].full_name,
          email: data[0].email,
          // Don't load password for security reasons
        });
      }
    });
  }

  onSubmit(): void {
    if (this.updateForm.valid) {
      this.apiService.update_user(this.updateForm.value).subscribe(
        (response: any) => {
          this.message = 'Profile updated successfully.';
          this.message2 = '';
        },
        (error: any) => {
          this.message2 = 'Failed to update profile. Please try again.';
          this.message = '';
          console.error(error);
        }
      );
    }
  }
}
