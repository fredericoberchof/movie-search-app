import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
<<<<<<< HEAD
=======
import { MovieSearchComponent } from "./movie-search/movie-search.component";
>>>>>>> origin/movie-search

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
<<<<<<< HEAD
    imports: [CommonModule, RouterOutlet, HeaderComponent]
=======
    imports: [CommonModule, RouterOutlet, HeaderComponent, MovieSearchComponent]
>>>>>>> origin/movie-search
})
export class AppComponent {
  title = 'movie-search-app';
}
