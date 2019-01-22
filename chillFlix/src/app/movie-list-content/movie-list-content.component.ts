import { Component, OnInit } from '@angular/core';
import { MovieDataServiceService } from '../movie-data-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-list-content',
  templateUrl: './movie-list-content.component.html',
  styleUrls: ['./movie-list-content.component.scss']
})
export class MovieListContentComponent implements OnInit {

  movies$: Object;

  movie_list:string[] = ["value1","value2","value3"];

  constructor(private movie_data: MovieDataServiceService) { }

  ngOnInit() {
    this.movie_data.getMovies().subscribe(
      data => this.movies$ = data
    )
  }

}
