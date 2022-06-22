import { Component, OnInit } from '@angular/core';
import { Movies } from '../movies';
import { MovieListService } from '../movie-list.service';
import { TvShowsService } from '../tv-shows.service';
import { Shows } from '../Shows';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers:[MovieListService,TvShowsService],
  
  
})
export class MoviesComponent implements OnInit {

movieButton!:boolean;
showsButton!:boolean;
  num :number|string='';
  public Movie:Movies[]=[];
  error:string='Error: Invalid Index!';
  public tvShows:Shows[]=[];
  test:string='k';
  shownum!:number|string;

  genMovieTable(){

    this.movieButton=!this.movieButton;
  }

  genShowTable(){

    this.showsButton=!this.showsButton;
  }

  //Have to add in Constructor
  constructor(private movieList:MovieListService,private shows:TvShowsService) {
  

    
   }

   getMovies(){
    this.movieList.getMovieData().subscribe(data =>{this.Movie=data;})
   }


   getShows(){
    this.shows.getShowData().subscribe(data =>{this.tvShows=data})
   }

  ngOnInit(): void {
this.getMovies();
this.getShows();
  
  }


}




