import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  private baseUrl = 'http://localhost/APIS';

  constructor(private http: HttpClient) {}

  addReview(review: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/add_review.php`, review);
  }

  getReviews(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/get_reviews.php`);
  }

  deleteReview(reviewId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete_review.php?id=${reviewId}`);
  }
}
