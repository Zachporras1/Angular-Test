import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { PipesComponent } from './pipes/pipes.component';
import { TitleComponent } from './title/title.component';

const routes: Routes = [
{path:'home',component:HomeComponent},
{path:'',component:HomeComponent},
{path:"title",component:TitleComponent},
  {path:'movies', component:MoviesComponent},
  {path:'smart-table',component:SmartTableComponent},
  {path:'pipes', component:PipesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
