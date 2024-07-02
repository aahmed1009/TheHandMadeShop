import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = 'http://localhost/APIS';
  constructor(private http: HttpClient) {}

  // get_Users() {
  //   return this.http.get<any[]>('http://localhost/API/get_users.php');
  // }
  // get_UsersDetails(cond: any) {
  //   return this.http.get<any[]>('http://localhost/API/get_users.php?' + cond);
  // }
  get_Users() {
    return this.http.get<any[]>(this.baseUrl + '/get_users.php');
  }
  get_UsersDetails(cond: any) {
    return this.http.get<any[]>(`${this.baseUrl}/get_users.php?${cond}`);
  }

  register_user(data: any): Observable<any> {
    const body = JSON.stringify(data);
    return this.http.post(this.baseUrl + '/register.php', body);
  }
  insert_user(data: any): Observable<any> {
    const body = JSON.stringify(data);
    return this.http.post(this.baseUrl + '/login.php', body);
  }
  update_user(data: any) {
    const body = JSON.stringify(data);
    return this.http.post(`${this.baseUrl}/update_user.php`, body);
  }
  delete_user(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete_user.php?id=${id}`);
  }
  // Category Services
  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/get_categories.php`);
  }

  addCategory(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/add_category.php`, data);
  }

  updateCategory(id: number, data: any): Observable<any> {
    return this.http.put<any>(
      `${this.baseUrl}/update_category.php?id=${id}`,
      data
    );
  }

  deleteCategory(id: number): Observable<any> {
    return this.http.delete<any>(
      `${this.baseUrl}/delete_category.php?id=${id}`
    );
  }

  // Product Services
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/get_products.php`);
  }

  getUserProducts(userId: number): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.baseUrl}/get_user_products.php?user_id=${userId}`
    );
  }

  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/get_product.php?id=${id}`);
  }

  addProduct(data: FormData): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/add_product.php`, data);
  }

  updateProduct(id: number, data: FormData): Observable<any> {
    return this.http.post<any>(
      `${this.baseUrl}/update_product.php?id=${id}`,
      data
    );
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/delete_product.php?id=${id}`);
  }

  // Order Services
  getOrders(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/get_orders.php`);
  }

  deleteOrder(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/delete_order.php?id=${id}`);
  }

  // Review Services
  getReviews(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/get_reviews.php`);
  }

  deleteReview(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/delete_review.php?id=${id}`);
  }
}
