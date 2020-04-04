import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { CreateReviewComponent } from './create-review/create-review.component';
import { ReviewComponent } from './review/review.component';
import { CreateMovieComponent } from './create-movie/create-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    CreateReviewComponent,
    ReviewComponent,
    CreateMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
