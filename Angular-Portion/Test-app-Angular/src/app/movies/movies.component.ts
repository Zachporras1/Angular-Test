import { Component, OnInit } from '@angular/core';
import { Movies } from '../movies';
import { MovieListService } from '../movie-list.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers:[MovieListService]
  
})
export class MoviesComponent implements OnInit {


  num :number|string=''
   
  public Movie:Movies[]=[];
  
  error:string='Error: Invalid Index!'

  //Have to add in Constructor
  constructor(private movieList:MovieListService) {
  

    
   }

   getMovies(){
    this.movieList.getMovieData().subscribe(data =>{this.Movie=data;})
   }

  ngOnInit(): void {
this.getMovies();
  
  }


}




