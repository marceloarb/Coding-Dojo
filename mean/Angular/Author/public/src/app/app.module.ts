import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { NewAuthorComponent } from './new-author/new-author.component';
import { UpdateAuthorComponent } from './update-author/update-author.component';
import { FormsModule } from '@angular/forms';
import { AuthorIdComponent } from './author-id/author-id.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NewAuthorComponent,
    UpdateAuthorComponent,
    AuthorIdComponent,
    HomePageComponent
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
