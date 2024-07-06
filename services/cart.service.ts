import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  getCartItems(userId: number): Observable<any[]> {
    const cart = JSON.parse(localStorage.getItem(`cart_${userId}`) || '[]');
    return of(cart);
  }

  addToCart(userId: number, product: any, quantity: number): Observable<any> {
    let cart = JSON.parse(localStorage.getItem(`cart_${userId}`) || '[]');
    const index = cart.findIndex((item: any) => item.id === product.id);
    if (index !== -1) {
      cart[index].quantity += quantity;
    } else {
      product.quantity = quantity;
      cart.push(product);
    }
    localStorage.setItem(`cart_${userId}`, JSON.stringify(cart));
    return of(cart);
  }

  updateCartItemQuantity(
    userId: number,
    productId: number,
    quantity: number
  ): Observable<any> {
    let cart = JSON.parse(localStorage.getItem(`cart_${userId}`) || '[]');
    const index = cart.findIndex((item: any) => item.id === productId);
    if (index !== -1) {
      cart[index].quantity = quantity;
    }
    localStorage.setItem(`cart_${userId}`, JSON.stringify(cart));
    return of(cart);
  }

  removeFromCart(userId: number, productId: number): Observable<any> {
    let cart = JSON.parse(localStorage.getItem(`cart_${userId}`) || '[]');
    cart = cart.filter((item: any) => item.id !== productId);
    localStorage.setItem(`cart_${userId}`, JSON.stringify(cart));
    return of(cart);
  }

  clearCart(userId: number): Observable<any> {
    localStorage.removeItem(`cart_${userId}`);
    return of([]);
  }
}
