import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MovieListContentComponent} from './movie-list-content/movie-list-content.component';
import {MovieDetailComponent} from './movie-detail/movie-detail.component';
import {AddMovieComponent} from './add-movie/add-movie.component';
import {EditMovieComponent} from './edit-movie/edit-movie.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component'

const routes: Routes = [
  {path: '', component: MovieListContentComponent},
  {path: 'add', component: AddMovieComponent},
  {path: 'edit', component: EditMovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
