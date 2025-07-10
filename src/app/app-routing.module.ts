import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { CreateReviewComponent } from './components/create-review/create-review.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path: '', redirectTo: '/reviews', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'create-review', component: CreateReviewComponent },
  { path: 'users', component: UsersComponent },
  { path: '**', redirectTo: '/reviews' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }