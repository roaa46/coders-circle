import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { Review, User } from '../../models/user.model';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  reviews: Review[] = [];
  loading = true;
  error = '';
  currentUser: User | null = null;

  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    this.loadReviews();
  }

  loadReviews(): void {
    this.loading = true;
    this.apiService.getAllReviews().subscribe({
      next: (reviews) => {
        this.reviews = reviews;
        this.loading = false;
      },
      error: (error) => {
        this.error = 'Failed to load reviews';
        this.loading = false;
      }
    });
  }

  deleteReview(reviewId: number): void {
    if (confirm('Are you sure you want to delete this review?')) {
      this.apiService.deleteReview(reviewId).subscribe({
        next: () => {
          this.reviews = this.reviews.filter(review => review.id !== reviewId);
        },
        error: (error) => {
          this.error = 'Failed to delete review';
        }
      });
    }
  }

  editReview(reviewId: number): void {
    this.router.navigate(['/edit-review', reviewId]);
  }

  viewReview(reviewId: number): void {
    this.router.navigate(['/review', reviewId]);
  }

  canEditReview(review: Review): boolean {
    return this.currentUser && review.user && this.currentUser.id === review.user.id;
  }

  getResourceIcon(type: string): string {
    switch (type) {
      case 'LINK': return '🔗';
      case 'IMAGE': return '🖼️';
      case 'FILE': return '📁';
      default: return '📎';
    }
  }
}