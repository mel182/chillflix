import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { MovieDataServiceService } from '../movie-data-service.service';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-movie-list-content',
  templateUrl: './movie-list-content.component.html',
  styleUrls: ['./movie-list-content.component.scss']
})
export class MovieListContentComponent implements OnInit {

  movies$: Object;
  public httpResponse = "";
  public title = "";
  public description = "";
  public movie_id = "";
  //Rating
  //thumbnail

  movie_list:string[] = ["value1","value2","value3"];

  @Input() testValue: String;

  constructor(private movie_data: MovieDataServiceService) { }

  ngOnInit() {
    this.fecthAllMovies();
  }

  fecthAllMovies(){
    this.movie_data.getMovies().subscribe(
      data => this.movies$ = data
    )
  }

  addMovie(){
    this.movie_data.addMovie(this,this.title,this.description,this.movie_id,function(error,response,context){

        if(error === null){
          context.httpResponse = response.message;
          context.refeshList();
        }else{
          context.httpResponse = response.message;
        }
      })
  };

  refeshList(){
    this.fecthAllMovies();
      this.httpResponse = 'Movie added'
  }
}
