import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewAuthorComponent } from './new-author/new-author.component';
import { UpdateAuthorComponent } from './update-author/update-author.component';
import {AuthorIdComponent} from './author-id/author-id.component';
import {HomePageComponent} from './home-page/home-page.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'authors', component: NewAuthorComponent},
  {path: 'edit/:id', component: UpdateAuthorComponent},
  {path: 'author/:id', component: AuthorIdComponent},
  { path: '', pathMatch: 'full', redirectTo: '' },
  { path: '**', redirectTo: '' } 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
