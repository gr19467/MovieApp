import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Movie } from '../Model/movie';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url : string = 'https://api.themoviedb.org/3';
  constructor(private http : HttpClient) { }

  getPopularMovies() : Observable<any> {
    return this.http.get<Movie>(this.url + '/movie/popular?api_key=' + environment.api_key);
  }

  getNowPlayingMovies() : Observable<any> {
    return this.http.get<Movie>(this.url + '/movie/now_playing?api_key=' + environment.api_key);
  }

  getTopRatedMovies() : Observable<any> {
    return this.http.get<Movie>(this.url + '/movie/top_rated?api_key=' + environment.api_key);
  }

  getUpcomingMovies() : Observable<any> {
    return this.http.get<Movie>(this.url + '/movie/upcoming?api_key=' + environment.api_key);
  }

  getTrendingMovies() : Observable<any> {
    return this.http.get<Movie>(this.url + '/trending/movie/day?api_key=' + environment.api_key);
  }

  getOriginals() : Observable<any> {
    return this.http.get<Movie>(this.url + '/discover/tv?api_key=' + environment.api_key);
  }
}
