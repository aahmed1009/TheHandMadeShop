import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'services/api.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
})
export class OrderDetailsComponent {
  orderId: number;
  order: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    this.orderId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.loadOrderDetails();
  }

  loadOrderDetails(): void {
    this.apiService.getOrderById(this.orderId).subscribe({
      next: (data) => {
        this.order = data;
      },
      error: (err) => {
        console.error('Error loading order details', err);
      },
    });
  }
}
