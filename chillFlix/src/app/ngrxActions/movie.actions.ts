import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { MovieNGRXModel } from '../ngrxModel/movie.model';

export const ADD_MOVIE = '[MovieNGRXModel] add';
export const REMOVE_MOVIE = '[MovieNGRXModel] remove';
export const GET_MOVIES = '[MovieNGRXModel] get movies';
export const LOAD_MOVIE_COMPLETED = '[MovieNGRXModel] Load movie completed';
export const LOAD_MOVIE_ERROR = '[MovieNGRXModel] Load movie error';

export class AddMovie implements Action {
    readonly type = ADD_MOVIE;
    constructor(public payload: MovieNGRXModel) {}
}

export class RemoveMovie implements Action {
    readonly type = REMOVE_MOVIE;
    constructor(public payload: Number) {}
}

export class LoadMoviesCompleted implements Action {
    public readonly type = LOAD_MOVIE_COMPLETED;
    constructor(public readonly payload: MovieNGRXModel[]) {}
}

export class LoadMovieError implements Action {
    public readonly type = LOAD_MOVIE_ERROR;
}

export class GetMovie implements Action {
    public readonly type = GET_MOVIES;
}

export type MovieActions = AddMovie | RemoveMovie | LoadMoviesCompleted | LoadMovieError | GetMovie ;
