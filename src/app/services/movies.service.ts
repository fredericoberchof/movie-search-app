import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environment.prod';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private omdbApiKey = environment.omdbApiKey;

  private apiUrl = `https://www.omdbapi.com/?apikey=${this.omdbApiKey}&`;

  constructor(private http: HttpClient) {}

  searchMovie(movieName: string): Observable<any> {
    return this.http.get(`${this.apiUrl}&t=${movieName}`);
  }

  searchTitle(searchTerm: string): Observable<any> {
    return this.http.get(`${this.apiUrl}&s=${searchTerm}`);
  }
}
