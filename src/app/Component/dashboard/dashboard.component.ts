import { Component, OnInit } from '@angular/core';
import { Movie } from '../../Model/movie';
import { environment } from '../../../environments/environment';
import { DataService } from '../../Service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{
  
  latestMovie: any;
  popularMovies !: Movie;
  nowPlayingMovies !: Movie;
  topRatedMovies !: Movie;
  upcomingMovies !: Movie;
  trendingMovies !: Movie;
  originals !: Movie;

  constructor(private dataService : DataService) { }

  ngOnInit(): void{
    this.getPopularMovies();
    this.getNowPlayingMovies();
    this.getTopRatedMovies();
    this.getUpcomingMovies();
    this.getTrendingMovies();
    this.getOriginals();
  }

  getPopularMovies() {
    this.dataService.getPopularMovies().subscribe(res => {
      this.popularMovies = this.modifyData(res);
      console.log(this.popularMovies);
    }, err => {
      console.log('Error while fetching popular movies.', err)
    })
  }

  getNowPlayingMovies() {
    this.dataService.getNowPlayingMovies().subscribe(res => {
      this.nowPlayingMovies = this.modifyData(res);
      console.log(this.nowPlayingMovies);
    }, err => {
      console.log('Error while fetching now playing movies.', err)
    })
  }

  getTopRatedMovies() {
    this.dataService.getTopRatedMovies().subscribe(res => {
      this.topRatedMovies = this.modifyData(res);
      console.log(this.topRatedMovies);
    }, err => {
      console.log('Error while fetching top rated movies.', err)
    })
  }

  getUpcomingMovies() {
    this.dataService.getUpcomingMovies().subscribe(res => {
      this.upcomingMovies = this.modifyData(res);
      console.log(this.upcomingMovies);
    }, err => {
      console.log('Error while fetching upcoming movies.', err)
    })
  }

  getTrendingMovies() {
    this.dataService.getTrendingMovies().subscribe(res => {
      this.trendingMovies = this.modifyData(res);
      console.log(this.trendingMovies);
    }, err => {
      console.log('Error while fetching trending movies.', err)
    })
  }

  getOriginals() {
    this.dataService.getOriginals().subscribe(res => {
      this.originals = this.modifyData(res);
      console.log(this.originals);
    }, err => {
      console.log('Error while fetching originals.', err)
    })
  }

  modifyData(movies : Movie) : Movie {
    if(movies.results){
      movies.results.forEach(element => {
        element.backdrop_path = 'https://image.tmdb.org/t/p/original' + element.backdrop_path + 'api_key?' + environment.api_key;
        if(!element.title){
          element.title = element?.name;
        }
      })
    }
    return movies;
  }
}
