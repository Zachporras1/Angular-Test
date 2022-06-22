import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { Ng2SmartTableModule,LocalDataSource } from 'ng2-smart-table';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { PipesComponent } from './pipes/pipes.component';
import { TitleComponent } from './title/title.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieListService } from './movie-list.service';
import { TvShowsService } from './tv-shows.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    SmartTableComponent,
    PipesComponent,
    TitleComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SmartTableModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
