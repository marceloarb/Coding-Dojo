import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DallasComponent } from './dallas/dallas.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { SeattleComponent } from './seattle/seattle.component';


const routes: Routes = [
  {path:'', component:DallasComponent},
  {path: 'dallas', component:DallasComponent},
  {path: 'chicago', component:ChicagoComponent},
  {path: 'seattle', component:SeattleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
