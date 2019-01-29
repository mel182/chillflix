import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieDataServiceService {

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get('http://localhost:8080/api/movie/all');
  }

  getMovie(id) {
    return this.http.get('http://localhost:8080/api/movie/' + id);
  }


  getGenreList() {
    return this.http.get('http://localhost:8080/api/movie/genre/all');
  }


  addMovie(title: string, description: string, youtube_id: string, genre: string) {

    return this.http.post('http://localhost:8080/api/movie/add', {
      'title': title,
      'description': description,
      'url': youtube_id,
      'genre': genre
    });
  }
}
