import { Component } from '@angular/core';
import { ApiService } from 'services/api.service';
import { AuthService } from 'services/auth.service';

@Component({
  selector: 'app-user-products',
  templateUrl: './user-products.component.html',
  styleUrls: ['./user-products.component.css'],
})
export class UserProductsComponent {
  userProducts: any[] = [];

  constructor(
    private apiService: ApiService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadUserProducts();
  }

  loadUserProducts(): void {
    const userId = this.authService.getUserId();
    this.apiService.getUserProducts(userId).subscribe((data: any) => {
      this.userProducts = data;
    });
  }
}
