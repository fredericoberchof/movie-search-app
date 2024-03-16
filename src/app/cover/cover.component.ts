import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-cover',
  standalone: true,
  imports: [],
  templateUrl: './cover.component.html',
  styleUrl: './cover.component.scss',
})
export class CoverComponent implements OnInit {
  movies: any[] = [];
  searchTerm = 'Harry Potter';

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.searchMovies();
  }

  searchMovies(): void {
    this.moviesService.searchTitle(this.searchTerm).subscribe((data: any) => {
      if (data.Search) {
        this.movies = data.Search.slice(0, 4);
      }
    });
  }
}
