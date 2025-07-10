import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  userData: User = {
    name: '',
    username: '',
    password: ''
  };
  
  confirmPassword = '';
  loading = false;
  error = '';

  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit(): void {
    if (!this.userData.name || !this.userData.username || !this.userData.password) {
      this.error = 'Please fill in all fields';
      return;
    }

    if (this.userData.password !== this.confirmPassword) {
      this.error = 'Passwords do not match';
      return;
    }

    if (this.userData.password.length < 6) {
      this.error = 'Password must be at least 6 characters long';
      return;
    }

    this.loading = true;
    this.error = '';

    this.apiService.register(this.userData).subscribe({
      next: (user) => {
        this.authService.setCurrentUser(user);
        this.router.navigate(['/reviews']);
      },
      error: (error) => {
        this.error = error.error?.message || 'Registration failed. Username might already exist.';
        this.loading = false;
      }
    });
  }
}