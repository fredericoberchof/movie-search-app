import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private router: Router) {}

  navigateToRegister() {
    this.router.navigate(['/register'], { replaceUrl: true });
  }

  navigateToLogin() {
    this.router.navigate(['/login'], { replaceUrl: true });
  }
}
