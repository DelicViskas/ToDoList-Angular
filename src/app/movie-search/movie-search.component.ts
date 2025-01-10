import { Component } from '@angular/core';
import { Movie, movieDetails, MovieService } from '../movie.service';
import { FormsModule } from '@angular/forms';
import { MoviePreviewComponent } from './movie-preview/movie-preview.component';
import { MovieModalComponent } from './movie-modal/movie-modal.component';


@Component({
  selector: 'app-movie-search',
  imports: [FormsModule,MoviePreviewComponent,MovieModalComponent],
  templateUrl: './movie-search.component.html',
  styleUrl: './movie-search.component.css'
})
export class MovieSearchComponent {
  movies: Movie[] = [];
  selectedMovie: movieDetails | null = null;
  searchQuery: string = '';
  constructor(private movieService: MovieService) { }
  
  searchMovies() {
    this.movieService.searchMovies(this.searchQuery).subscribe(response => {
      this.movies = response.Search || [];
    });
  }

  openModal(imdbID:string) {
    this.movieService.getMovieDetails(imdbID).subscribe(response => {
      this.selectedMovie = response;
    });
  }

  closeModal() {
    this.selectedMovie = null;
  }

}






