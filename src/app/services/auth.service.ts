import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {User} from "../../models/user.model";
import {HttpClient} from "@angular/common/http";
import {apiUrl} from "../../constants";
import {map} from "rxjs/operators";
import {setHeaders} from "../../methods/methods";
import {UserRole} from "../../enums/userRoles.enum";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUserSubject: BehaviorSubject<User | null>;
  public currentUserObservable: Observable<User | null>;

  constructor(private http: HttpClient) {
    const s = localStorage.getItem('currentUser');
    if (s != null) {
      this.currentUserSubject = new BehaviorSubject<User | null>(JSON.parse(s));
    } else {
      this.currentUserSubject = new BehaviorSubject<User | null>(null);
    }

    this.currentUserObservable = this.currentUserSubject?.asObservable();
  }

  public get currentUser(): User | null {
    return this.currentUserSubject?.value;
  }

  login(data: { password: string; email: string }) {
    return this.http.post<any>(`${apiUrl}/auth/login`, data).pipe(
      map((user: any) => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      })
    );
  }

  logout(accessToken: string) {
    return this.http.get(`${apiUrl}/auth/logout`, setHeaders(accessToken));
  }

  register(data: {
    lastName: string;
    firstName: string;
    password: string;
    confirmPassword: string;
    role: number;
    email: string;
  }) {
    return this.http.post(`${apiUrl}/auth/register`, data, {
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
    });
  }

  // resetPasswordRequest(email: any) {
  //   const data: any = {};
  //   data.email = email;
  //   return this.http.post(`${apiUrl}/forgot`, data);
  // }
  //
  // resetPassword(data: any, token: any) {
  //   const d: any = {};
  //   d.data = data;
  //   d.token = token;
  //   return this.http.post(`${apiUrl}/resetpassword`, d);
  // }

  isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  isAdmin(): boolean {
    if (!this.currentUser) return false;
    return this.currentUser.role == UserRole.Admin;
  }

  isTokenExpired(token: string) {
    const expiry = JSON.parse(atob(token.split('.')[1])).exp;
    return Math.floor(new Date().getTime() / 1000) >= expiry;
  }
}
