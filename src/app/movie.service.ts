import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface objectMovie {
  Search: Movie[]
}

export interface Movie {
  imdbID: string;
  Title:string;
  Poster:string;
  Year: string;
}

export interface movieDetails {
  Genre: string;
  imdbRating: string;
  Language: string;
  Country: string;
  Awards: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Title: string;
  Year: string;
  Poster:string;
  Rated:string;
  Runtime:string;
  imdbID:string;
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = 'a2b07930&s';
  private url = 'http://www.omdbapi.com/';

  constructor(private http: HttpClient) { }

  searchMovies(query: string) {
    return this.http.get<objectMovie>(`${this.url}?s=${query}&apikey=${this.apiKey}`);
  }

  getMovieDetails(id: string){
    return this.http.get<movieDetails>(`${this.url}?i=${id}&apikey=${this.apiKey}`);
  }
}
