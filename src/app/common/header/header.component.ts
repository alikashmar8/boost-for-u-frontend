import { Component, OnInit } from '@angular/core';
import {User} from "../../../models/user.model";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser: User | null;
  isAdmin: boolean= false;
  isHome: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.currentUser = authService.currentUser;
  }

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin();
  }

  isCurrentRoute(param: string) {
    return param == this.router.url;
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.authService.currentUserSubject.next(null);
    this.router.navigate(['/']).then(() => window.location.reload());
  }
}
