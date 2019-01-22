import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MovieListContentComponent} from './movie-list-content/movie-list-content.component';

const routes: Routes = [
  {path: '', component: MovieListContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
