import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';
  nav = [
    {href: '/', title: 'dz1'},
    {href: '/dz2', title: 'dz2'},
    {href: '/Movie-search', title: 'movie search'},
  ]
}
