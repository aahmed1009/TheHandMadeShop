import { Component } from '@angular/core';
import { ApiService } from 'services/api.service';

@Component({
  selector: 'app-reviews-management',
  templateUrl: './reviews-management.component.html',
  styleUrls: ['./reviews-management.component.css'],
})
export class ReviewsManagementComponent {
  reviews: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadReviews();
  }

  loadReviews(): void {
    this.apiService.getReviews().subscribe((data: any) => {
      this.reviews = data;
    });
  }

  deleteReview(reviewId: number): void {
    this.apiService.deleteReview(reviewId).subscribe({
      next: (res) => {
        console.log('Review deleted successfully', res);
        this.loadReviews();
      },
      error: (err) => {
        console.error('Error deleting review', err);
      },
    });
  }
}
