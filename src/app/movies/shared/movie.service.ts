import { Injectable } from '@angular/core';
import {Movie} from "./movie.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private moviesUrl = 'http://localhost:8080/api/movies';

  constructor(private httpClient:HttpClient) { }

  getMovies(): Observable<Array<Movie>>{
    return this.httpClient.get<Array<Movie>>(this.moviesUrl);
}
}
