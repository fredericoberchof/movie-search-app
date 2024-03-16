import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private apiUrl = 'http://www.omdbapi.com/?apikey=950080dd';

  constructor(private http: HttpClient) {}

  searchMovie(movieName: string): Observable<any> {
    return this.http.get(`${this.apiUrl}&t=${movieName}`);
  }
}
