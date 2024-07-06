import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'services/api.service';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css'],
})
export class EditOrderComponent {
  editOrderForm: FormGroup;
  orderId: number;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.editOrderForm = this.fb.group({
      status: ['', Validators.required],
      // Add more fields as necessary
    });
    this.orderId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.loadOrderDetails();
  }

  loadOrderDetails(): void {
    this.apiService.getOrderById(this.orderId).subscribe({
      next: (data) => {
        this.editOrderForm.patchValue(data);
      },
      error: (err) => {
        console.error('Error loading order details', err);
      },
    });
  }

  onSubmit(): void {
    if (this.editOrderForm.valid) {
      this.apiService
        .updateOrder(this.orderId, this.editOrderForm.value)
        .subscribe({
          next: (res) => {
            console.log('Order updated successfully', res);
            this.router.navigate(['/dashboard/orders-management']);
          },
          error: (err) => {
            console.error('Error updating order', err);
          },
        });
    }
  }
}
