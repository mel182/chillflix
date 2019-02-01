import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { MovieDataServiceService } from '../movie-data-service.service';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';
import { MovieNGRXModel } from '../ngrxModel/movie.model';
import { AppState } from '../../app/app.state';
import * as MovieNGRXActions from '../ngrxActions/movie.actions';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-movie-list-content',
  templateUrl: './movie-list-content.component.html',
  styleUrls: ['./movie-list-content.component.scss']
})
export class MovieListContentComponent implements OnInit {

  movies$: Object;
  public httpResponse = '';
  public title = '';
  public description = '';
  public movie_id = '';
  ngrxMovie$: Observable<MovieNGRXModel>;
  // Rating
  // thumbnail

  movie_list: string[] = ['value1', 'value2', 'value3'];

  @Input() testValue: String;

  constructor(private store: Store<AppState>) {
    this.ngrxMovie$ = store.select('video');
    // this.ngrxMovie$ = store.pipe(select(s => s.appState));
    // this.ngrxMovie$.subscribe(m => console.log(m));
   }

  ngOnInit() {
    this.store.dispatch(new MovieNGRXActions.GetMovie());
  }

  removeMovie(index) {
    this.store.dispatch(new MovieNGRXActions.RemoveMovie(index));
  }
}
