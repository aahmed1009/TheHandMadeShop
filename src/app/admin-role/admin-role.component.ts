import { Component } from '@angular/core';
import { ApiService } from 'services/api.service';
@Component({
  selector: 'app-admin-role',
  templateUrl: './admin-role.component.html',
  styleUrls: ['./admin-role.component.css'],
})
export class AdminRoleComponent {
  users: any = [];
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.get_Users().subscribe({
      next: (data: any) => {
        console.log(data);
        this.users = data; // Assign the response directly to the users array
      },
      error: (err: any) => {
        console.error('Error fetching users', err);
      },
    });
  }
  deleteUser(userId: number): void {
    this.api.delete_user(userId).subscribe({
      next: (response: any) => {
        console.log('User deleted:', response);
        this.users = this.users.filter((user: any) => user.id !== userId); // Remove the deleted user from the users array
      },
      error: (err: any) => {
        console.error('Error deleting user:', err);
      },
    });
  }
}
