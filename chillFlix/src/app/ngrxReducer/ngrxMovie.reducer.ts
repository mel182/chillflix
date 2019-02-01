import { Action } from '@ngrx/store';
import { MovieNGRXModel } from '../ngrxModel/movie.model';
import * as MovieNGRXActions from '../ngrxActions/movie.actions';

const initialState: MovieNGRXModel = {
    title: 'Nrgx initial title',
    description: '',
    genre: '',
    url: 'www.youtube.com'
};

export function MovieReducer(state: MovieNGRXModel[] = [initialState], action: MovieNGRXActions.MovieActions) {
    switch (action.type) {
        case MovieNGRXActions.ADD_MOVIE:
            state.push(action.payload);
            return state;
        case MovieNGRXActions.REMOVE_MOVIE:
            state.splice(Number(action.payload), 1);
            return state;
        case MovieNGRXActions.LOAD_MOVIE_COMPLETED:
            state.splice(0, state.length );

            for (const entry of action.payload) {
                state.push(entry);
            }
            return state;
        case MovieNGRXActions.LOAD_MOVIE_ERROR:
            return state;
        case MovieNGRXActions.GET_MOVIES:
            return [...state];
        default:
            return state;
    }
}
