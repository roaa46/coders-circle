import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, UserNameView, LoginRequest, Review, Resource } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  // User endpoints
  register(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/user/register`, user, { headers: this.getHeaders() });
  }

  login(loginRequest: LoginRequest): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/user/login`, loginRequest, { headers: this.getHeaders() });
  }

  getAllUsers(): Observable<UserNameView[]> {
    return this.http.get<UserNameView[]>(`${this.baseUrl}/user/find-all`);
  }

  getUserReviews(userId: number): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.baseUrl}/user/${userId}/my-reviews`);
  }

  deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/user/delete/${userId}`);
  }

  // Review endpoints
  addReview(review: Review): Observable<Review> {
    return this.http.post<Review>(`${this.baseUrl}/review/add`, review, { headers: this.getHeaders() });
  }

  updateReview(review: Review): Observable<Review> {
    return this.http.put<Review>(`${this.baseUrl}/review/update`, review, { headers: this.getHeaders() });
  }

  deleteReview(reviewId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/review/delete/${reviewId}`);
  }

  getReview(reviewId: number): Observable<Review> {
    return this.http.get<Review>(`${this.baseUrl}/review/${reviewId}`);
  }

  getAllReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.baseUrl}/review/find-all`);
  }

  // Resource endpoints
  addResource(resource: Resource): Observable<Resource> {
    return this.http.post<Resource>(`${this.baseUrl}/resource/add`, resource, { headers: this.getHeaders() });
  }

  updateResource(resource: Resource): Observable<Resource> {
    return this.http.put<Resource>(`${this.baseUrl}/resource/update`, resource, { headers: this.getHeaders() });
  }

  deleteResource(resourceId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/resource/delete/${resourceId}`);
  }

  getAllResources(): Observable<Resource[]> {
    return this.http.get<Resource[]>(`${this.baseUrl}/resource/find-all`);
  }

  getResourcesByReview(reviewId: number): Observable<Resource[]> {
    return this.http.get<Resource[]>(`${this.baseUrl}/resource/find-by-review/${reviewId}`);
  }
}