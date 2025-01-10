import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Movie } from '../../movie.service';

@Component({
  selector: 'app-movie-preview',
  imports: [],
  templateUrl: './movie-preview.component.html',
  styleUrl: './movie-preview.component.css'
})
export class MoviePreviewComponent {
  @Input() movie: Movie | null = null;
  @Output() movieSelected = new EventEmitter<string>();

  onMovieClick() {
    this.movieSelected.emit(this.movie?.imdbID);
  }
}

