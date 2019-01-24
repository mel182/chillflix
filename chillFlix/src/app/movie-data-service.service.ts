import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

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


  getGenreList(){
    return this.http.get('http://localhost:8080/api/movie/genre/all');
  }


  addMovie(target_class,title,description,youtube_id,callback){

    this.http.post("http://localhost:8080/api/movie/add",{
      "title": title,
      "description": description,
      "movie_id": youtube_id
    }).subscribe( data => {
      console.log('data: ',data);
      callback(null,data,target_class);
    }, error => {
      console.log('Error: ',error);
      callback(error,null,target_class);
    })
  }
}
