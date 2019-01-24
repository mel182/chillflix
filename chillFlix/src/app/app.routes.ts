import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MovieListContentComponent} from './movie-list-content/movie-list-content.component';
import {MovieDetailComponent} from './movie-detail/movie-detail.component';
import {AddMovieComponent} from './add-movie/add-movie.component';
import {EditMovieComponent} from './edit-movie/edit-movie.component';

const routes: Routes = [
  // {path: '', component: MovieListContentComponent},
  // {path: 'detail/:movie_id', component: MovieDetailComponent},
  // {path: 'add', component: AddMovieComponent},
  // {path: 'edit', component: EditMovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouters {}