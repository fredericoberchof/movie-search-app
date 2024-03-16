import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    MovieSearchComponent,
    FooterComponent,
  ],
})
export class AppComponent {
  title = 'movie-search-app';
  register: boolean = false;
  login: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      if (this.router.url === '/register' || this.router.url === '/login') {
        this.register = true;
      } else {
        this.register = false;
      }
    });
  }
}
