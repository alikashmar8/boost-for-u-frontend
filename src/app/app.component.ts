import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'boost-for-you';

  constructor(private router: Router) {}

  isLoginPage() {
    switch (this.router.url) {
      case '/admin':
        return true;
      case '/login':
        return true;
      default:
        return false;
    }
  }
}
