import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ReviewService } from 'services/review.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css'],
})
export class AddReviewComponent {
  addReviewForm: FormGroup;
  productId: number;

  constructor(
    private fb: FormBuilder,
    private reviewService: ReviewService,
    private route: ActivatedRoute
  ) {
    this.addReviewForm = this.fb.group({
      rating: ['', Validators.required],
      comment: ['', Validators.required],
      user_id: [1, Validators.required], // Assuming user id 1 for now, replace with dynamic user id
    });
    this.productId = this.route.snapshot.params['id'];
  }

  onSubmit(): void {
    if (this.addReviewForm.valid) {
      const review = {
        ...this.addReviewForm.value,
        product_id: this.productId,
      };

      this.reviewService.addReview(review).subscribe({
        next: (res) => {
          console.log('Review added successfully', res);
        },
        error: (err) => {
          console.error('Error adding review', err);
        },
      });
    }
  }
}
