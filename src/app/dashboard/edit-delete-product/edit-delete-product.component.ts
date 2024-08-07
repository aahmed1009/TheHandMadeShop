import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'services/api.service';

@Component({
  selector: 'app-edit-delete-product',
  templateUrl: './edit-delete-product.component.html',
  styleUrls: ['./edit-delete-product.component.css'],
})
export class EditDeleteProductComponent {
  products: any[] = [];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.apiService.getProducts().subscribe(
      (data: any) => {
        console.log('Received data:', data);
        this.products = data.map((product: any) => {
          if (product.images) {
            product.images = product.images.map((img: string) => img);
          }
          return product;
        });
        console.log('Processed products:', this.products);
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  editProduct(productId: number): void {
    this.router.navigate(['/dashboard/edit-specific-product', productId]);
  }

  deleteProduct(productId: number): void {
    this.apiService.deleteProduct(productId).subscribe({
      next: (res) => {
        console.log('Product deleted successfully', res);
        this.loadProducts();
      },
      error: (err) => {
        console.error('Error deleting product', err);
      },
    });
  }
}
