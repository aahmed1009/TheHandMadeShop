import { Component, OnInit } from '@angular/core';
import { ApiService } from 'services/api.service';

@Component({
  selector: 'app-orders-management',
  templateUrl: './orders-management.component.html',
  styleUrls: ['./orders-management.component.css'],
})
export class OrdersManagementComponent implements OnInit {
  orders: any[] = [];
  selectedOrder: any = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.apiService.getOrders().subscribe((data: any) => {
      this.orders = data;
    });
  }
  viewOrder(order: any): void {
    this.apiService.getOrderById(order.id).subscribe({
      next: (data: any) => {
        this.selectedOrder = { ...order, items: data.items };
      },
      error: (err) => {
        console.error('Error fetching order details', err);
      },
    });
  }
  getOrderDetails(order: any): void {
    this.apiService.getOrderById(order.id).subscribe({
      next: (data: any) => {
        console.log('Order details:', data); // Debugging line
        this.selectedOrder = { ...order, items: data.items };
      },
      error: (err) => {
        console.error('Error fetching order details', err);
      },
    });
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
