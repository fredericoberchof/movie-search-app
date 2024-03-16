import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './movie-search.component.html',
  styleUrl: './movie-search.component.scss',
})
export class MovieSearchComponent {
  movieName: string;
  movie: any;
  favorite: boolean = false;
  negative: boolean = false;
  showErrorMessage = false;

  constructor(private movieService: MoviesService) {
    this.movieName = '';
  }

  search() {
    this.showErrorMessage = false;
    this.movieService.searchMovie(this.movieName).subscribe((data) => {
      this.movie = data;

      if (data.Response === 'False') {
        this.showErrorMessage = true;
      }
    });
  }

  reset() {
    this.movieName = '';
    this.movie = null;
    this.showErrorMessage = false;
  }

  toggleFavorito() {
    this.favorite = !this.favorite;
    this.negative = false;
  }

  toggleNegativo() {
    this.negative = !this.negative;
    this.favorite = false;
  }

  share() {
    alert('Sorry, function not yet implemented.');
  }
}
