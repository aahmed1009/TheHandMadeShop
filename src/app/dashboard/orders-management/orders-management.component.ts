import { Component } from '@angular/core';
import { ApiService } from 'services/api.service';

@Component({
  selector: 'app-orders-management',
  templateUrl: './orders-management.component.html',
  styleUrls: ['./orders-management.component.css'],
})
export class OrdersManagementComponent {
  orders: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.apiService.getOrders().subscribe((data: any) => {
      this.orders = data;
    });
  }

  viewOrder(orderId: number): void {
    // Logic to view order details
  }

  editOrder(order: any): void {
    // Logic to edit order details
  }

  deleteOrder(orderId: number): void {
    this.apiService.deleteOrder(orderId).subscribe({
      next: (res) => {
        console.log('Order deleted successfully', res);
        this.loadOrders();
      },
      error: (err) => {
        console.error('Error deleting order', err);
      },
    });
  }
}
