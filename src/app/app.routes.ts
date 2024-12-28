import { Routes } from '@angular/router';
import { CityInfoComponent } from './city-info/city-info.component';
import { TodolistComponent } from './todolist/todolist.component';

export const routes: Routes = [
  {path:'',component: CityInfoComponent},
  {path:'dz2',component: TodolistComponent}
];
