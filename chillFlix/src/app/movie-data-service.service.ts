import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieDataServiceService {

  constructor(private http:HttpClient) { }

  getMovies() {
    return this.http.get('http://localhost:8080/api/movie/all');
  }

  getMovie(id){
    return this.http.get('http://localhost:8080/api/movie/'+id);
  }

  

}
