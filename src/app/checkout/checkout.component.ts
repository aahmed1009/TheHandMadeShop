import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'services/api.service';
import { CartService } from 'services/cart.service';
import { AuthService } from 'services/auth.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  cartItems: any[] = [];
  totalAmount: number = 0;

  constructor(
    private cartService: CartService,
    private apiService: ApiService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const userId = this.authService.getUserId();
    this.cartService.getCartItems(userId).subscribe((data: any[]) => {
      this.cartItems = data;
      this.totalAmount = this.cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    });
  }

  placeOrder(): void {
    const userId = this.authService.getUserId();
    if (userId === null) {
      alert('User not logged in');
      return;
    }

    const order = {
      user_id: userId,
      total_amount: this.totalAmount,
      items: this.cartItems,
    };

    this.apiService.placeOrder(order).subscribe({
      next: (res) => {
        console.log('Order placed successfully', res);
        this.cartService.clearCart(userId).subscribe(() => {
          this.router.navigate(['/orders']);
          alert('Order placed successfully');
        });
      },
      error: (err) => {
        console.error('Error placing order', err);
      },
    });
  }
}
