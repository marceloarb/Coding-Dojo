import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { CreateReviewComponent } from './create-review/create-review.component';
import { ReviewComponent } from './review/review.component';
import { CreateMovieComponent } from './create-movie/create-movie.component';


const routes: Routes = [
  {path:'movies', component:MovieComponent},
  {path:'new_movie',component:CreateMovieComponent},
  {path:'create_review/:id', component: CreateReviewComponent},
  {path:'movie/:id', component: ReviewComponent},
  { path: '**', redirectTo: '/movies' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
