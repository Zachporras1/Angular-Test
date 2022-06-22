import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Shows } from './Shows';


@Injectable({
  providedIn: 'root'
})
export class TvShowsService {

 


  constructor(private http:HttpClient) { }


  public getShowData(): Observable<Shows[]>{

    let url="http://localhost:8080/shows"

    return this.http.get<Shows[]>(url);

  }
}


