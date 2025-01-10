import { Routes } from '@angular/router';
import { CityInfoComponent } from './city-info/city-info.component';
import { TodolistComponent } from './todolist/todolist.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';

export const routes: Routes = [
  {path:'',component: CityInfoComponent},
  {path:'dz2',component: TodolistComponent},
  {path:'Movie-search',component: MovieSearchComponent},
];
