import { Injectable } from '@angular/core';
import{Movies} from './movies';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieListService {
 

  constructor(private http:HttpClient) { }

  public getMovieData():Observable<Movies[]> {

    let url= "http://localhost:8080/movies"
    return this.http.get<Movies[]>(url);
  }

  
}
