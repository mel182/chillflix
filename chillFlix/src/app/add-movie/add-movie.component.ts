import { Component, OnInit } from '@angular/core';
import { MovieDataServiceService } from '../movie-data-service.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {

  public genre = "";
  public movie_title = "";
  public movie_description = "";
  public movie_url = "";
  public indicator = "";
  movies$: Object;
  movie_genre_list$:Object;

  constructor(private movie_data: MovieDataServiceService) { }

  ngOnInit() {
    this.fecthAllMovieGenre();
  }

  addMovie(){
    console.log('Title: ',this.movie_title);
    console.log('Description: ',this.movie_description);
    console.log('URL: ',this.movie_url);

    if(this.movie_title == ''){
      this.indicator = "Please enter title";
    }else if(this.movie_description == ''){
      this.indicator = "Please provide a description";
    }else if(this.movie_url == ''){
      this.indicator = "Please provide a url";
    }else if(this.genre == ''){
      this.indicator = "Please select a movie genre";
    }else{
      this.indicator = "Ok";
    }
  }

  setGenre(selected_genre){
    this.genre = selected_genre;
  }

  fecthAllMovieGenre(){
    this.movie_data.getGenreList().subscribe(
      data => this.movie_genre_list$ = data
    )
  }

}
