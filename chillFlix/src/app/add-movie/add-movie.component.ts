import { Component, OnInit } from '@angular/core';
import { MovieDataServiceService } from '../movie-data-service.service';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { MovieNGRXModel } from '../ngrxModel/movie.model';
import { AppState } from '../../app/app.state';
import * as MovieNGRXActions from '../ngrxActions/movie.actions';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {

  public movieForm: FormGroup;
  public genre = '';
  public movie_title = '';
  public movie_description = '';
  public movie_url = '';
  public indicator = '';
  movies$: Object;
  movie_genre_list$: Object;
  // ngrxMovie: Observable<MovieNGRXModel[]>;

  constructor(private formBuilder: FormBuilder, private movie_data: MovieDataServiceService, private store: Store<AppState>) {
    // this.ngrxMovie = store.select('movie_reducer');

    this.movieForm = formBuilder.group({
      'movie_title': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(150)])],
      'movie_description': [null, Validators.required],
      'movie_url': [null,  Validators.compose([Validators.required])],
      'movie_genre': [null,  Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {
    this.fecthAllMovieGenre();
  }

  addMovie(data) {
    console.log('Data: ' + data);
    console.log('Movie title: ' + data.movie_title);
    console.log('Movie description: ' + data.movie_description);
    console.log('Movie URL: ' + data.movie_url);
    console.log('genre: ' + this.genre);

    if (!data.movie_url.startsWith('https://www.youtube.com')) {
      this.indicator = 'Please provide a valid YouTube URL';
    } else if (data.movie_genre === '') {
      this.indicator = 'Please select movie genre';
    } else {
      this.store.dispatch(new MovieNGRXActions.AddMovie({
      title: data.movie_title,
      description: data.movie_description,
      genre: data.movie_genre,
      url: data.movie_url
      }));
      alert('Movie added to store');

      this.movie_data.addMovie(data.movie_title, data.movie_description, data.movie_url, this.genre)
      .subscribe((res) => {

        this.indicator = 'Movie added to database';
      }, () => {
        this.indicator = 'Failed adding movie to database';
      });
    }
  }

  // addMovie() {
  //   console.log('Title: ', this.movie_title);
  //   console.log('Description: ', this.movie_description);
  //   console.log('URL: ', this.movie_url);

  //   if (this.movie_title === '') {
  //     this.indicator = 'Please enter title';
  //   } else if (this.movie_description === '') {
  //     this.indicator = 'Please provide a description';
  //   } else if (this.movie_url === '') {
  //     this.indicator = 'Please provide a url';
  //   } else if (this.genre === '') {
  //     this.indicator = 'Please select a movie genre';
  //   } else {
  //     this.indicator = 'Ok';
  //     this.movie_data.addMovie(this.movie_title, this.movie_description, this.movie_url, '').subscribe((res) => {

  //       this.indicator = 'Movie added to database';
  //     }, error => {
  //       this.indicator = 'Failed adding movie to database';
  //     });
  //   }
  // }

  setGenre(selected_genre) {
    this.genre = selected_genre;
  }

  fecthAllMovieGenre() {
    this.movie_data.getGenreList().subscribe(
      data => this.movie_genre_list$ = data
    );
  }
}
