import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { Review, Resource, ResourceType, User } from '../../models/user.model';

@Component({
  selector: 'app-create-review',
  templateUrl: './create-review.component.html',
  styleUrls: ['./create-review.component.scss']
})
export class CreateReviewComponent implements OnInit {
  review: Review = {
    title: '',
    content: '',
    resources: []
  };
  
  newResource: Resource = {
    type: ResourceType.LINK,
    url: ''
  };
  
  currentUser: User | null = null;
  loading = false;
  error = '';
  
  resourceTypes = Object.values(ResourceType);

  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    if (!this.currentUser) {
      this.router.navigate(['/login']);
    }
  }

  addResource(): void {
    if (!this.newResource.url.trim()) {
      return;
    }
    
    this.review.resources = this.review.resources || [];
    this.review.resources.push({ ...this.newResource });
    
    this.newResource = {
      type: ResourceType.LINK,
      url: ''
    };
  }

  removeResource(index: number): void {
    this.review.resources?.splice(index, 1);
  }

  onSubmit(): void {
    if (!this.review.title.trim() || !this.review.content.trim()) {
      this.error = 'Please fill in title and content';
      return;
    }

    if (!this.currentUser) {
      this.error = 'You must be logged in to create a review';
      return;
    }

    this.loading = true;
    this.error = '';

    // Set the user for the review
    this.review.user = { id: this.currentUser.id } as User;

    this.apiService.addReview(this.review).subscribe({
      next: (createdReview) => {
        this.router.navigate(['/review', createdReview.id]);
      },
      error: (error) => {
        this.error = 'Failed to create review. Please try again.';
        this.loading = false;
      }
    });
  }

  getResourceIcon(type: ResourceType): string {
    switch (type) {
      case ResourceType.LINK: return '🔗';
      case ResourceType.IMAGE: return '🖼️';
      case ResourceType.FILE: return '📁';
      default: return '📎';
    }
  }
}