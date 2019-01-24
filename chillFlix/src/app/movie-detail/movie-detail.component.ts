import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  id:Number;

  constructor(private activateRoute:ActivatedRoute) { }

  ngOnInit() {
    this.id = +this.activateRoute.snapshot.params['movie_id'];
  }

}
