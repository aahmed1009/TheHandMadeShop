import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'services/api.service';
import { AuthService } from 'services/auth.service';
import { CartService } from 'services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(
    private cartService: CartService,
    private apiService: ApiService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems(): void {
    const userId = this.authService.getUserId();
    this.cartService.getCartItems(userId).subscribe({
      next: (data) => {
        this.cartItems = data;
      },
      error: (err) => {
        console.error('Error fetching cart items', err);
      },
    });
  }

  increaseQuantity(item: any): void {
    const userId = this.authService.getUserId();
    this.cartService
      .updateCartItemQuantity(userId, item.id, item.quantity + 1)
      .subscribe({
        next: (cart) => {
          this.cartItems = cart;
        },
        error: (err) => {
          console.error('Error updating cart item quantity', err);
        },
      });
  }

  decreaseQuantity(item: any): void {
    const userId = this.authService.getUserId();
    if (item.quantity > 1) {
      this.cartService
        .updateCartItemQuantity(userId, item.id, item.quantity - 1)
        .subscribe({
          next: (cart) => {
            this.cartItems = cart;
          },
          error: (err) => {
            console.error('Error updating cart item quantity', err);
          },
        });
    }
  }

  removeItem(itemId: number): void {
    const userId = this.authService.getUserId();
    this.cartService.removeFromCart(userId, itemId).subscribe({
      next: (cart) => {
        this.cartItems = cart;
      },
      error: (err) => {
        console.error('Error removing cart item', err);
      },
    });
  }

  getTotalAmount(): number {
    return this.cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }

  checkout(): void {
    const userId = this.authService.getUserId();
    if (userId === null) {
      alert('User not logged in');
      return;
    }

    const order = {
      user_id: userId,
      items: this.cartItems.map((item) => ({
        product_id: item.id,
        quantity: item.quantity,
        price: item.price,
      })),
      total_amount: this.getTotalAmount(),
    };

    this.apiService.createOrder(order).subscribe({
      next: (res) => {
        console.log('Order created successfully', res);
        this.cartService.clearCart(userId).subscribe({
          next: () => {
            this.router.navigate(['/dashboard/orders-management']);
          },
          error: (err) => {
            console.error('Error clearing cart', err);
          },
        });
      },
      error: (err) => {
        console.error('Error creating order', err);
      },
    });
  }
}
