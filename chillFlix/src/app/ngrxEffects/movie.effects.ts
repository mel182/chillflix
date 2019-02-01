import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { MovieDataServiceService } from '../movie-data-service.service';
import { Observable, merge, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import * as MovieAction from '../../app/ngrxActions/movie.actions';

@Injectable()
export class MovieEffects {
    constructor(private readonly actions$: Actions, private readonly movieService: MovieDataServiceService) {}

    @Effect()
    loadMovies$: Observable<MovieAction.MovieActions> = this.actions$.pipe(
        ofType(MovieAction.GET_MOVIES),
        mergeMap(action => this.movieService.getMovies().pipe(
            map((movies) => new MovieAction.LoadMoviesCompleted(movies)),
            catchError(() => of(new MovieAction.LoadMovieError()))
           )
        )
    );
}
