import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    localStorage.getItem('token');
  }

  get isLoggedIn() {
    return this.getToken() !== undefined;
  }

  login(userInfo: {
    email: string;
    password: string;
  }): Observable<never | boolean> {
    const isEmailAuthOk = userInfo.email === 'a@b.c';
    const isPasswordAuthOk = userInfo.password === 'aaaa';

    if (isEmailAuthOk && isPasswordAuthOk) {
      this.setToken('qwerty');
      return of(true);
    }

    return throwError(() => new Error('login is failed'));
  }
}
