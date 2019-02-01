import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MovieListContentComponent} from './movie-list-content/movie-list-content.component';
import {AddMovieComponent} from './add-movie/add-movie.component';
import {EditMovieComponent} from './edit-movie/edit-movie.component';
import { AuthGuardService as AuthGuard } from './auth/auth-guard/auth-guard.service';
import { LoginComponentComponent } from './login-component/login-component.component';

const routes: Routes = [
  {path: '', component: MovieListContentComponent},
  {path: 'add', component: AddMovieComponent, canActivate: [AuthGuard]},
  {path: 'edit', component: EditMovieComponent},
  {path: 'login', component: LoginComponentComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
