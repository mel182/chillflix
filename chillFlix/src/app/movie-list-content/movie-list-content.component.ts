import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list-content',
  templateUrl: './movie-list-content.component.html',
  styleUrls: ['./movie-list-content.component.scss']
})
export class MovieListContentComponent implements OnInit {

  movie_list:string[] = ["value1","value2","value3"];

  constructor() { }

  ngOnInit() {
  }

}
