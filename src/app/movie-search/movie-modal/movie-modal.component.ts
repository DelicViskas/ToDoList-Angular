import { Component, EventEmitter, Input, Output } from '@angular/core';
import { movieDetails } from '../../movie.service';

@Component({
  selector: 'app-movie-modal',
  imports: [],
  templateUrl: './movie-modal.component.html',
  styleUrl: './movie-modal.component.css'
})
export class MovieModalComponent {
  @Input() movie: movieDetails | null = null;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}


