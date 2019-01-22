import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MovieListContentComponent} from './movie-list-content/movie-list-content.component';

const routes: Routes = [
  {path: '', component: MovieListContentComponent}
//   {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouters {}