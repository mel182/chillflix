import { MovieNGRXModel } from './ngrxModel/movie.model';

export interface AppState {
    readonly appState: MovieNGRXModel[];
}

