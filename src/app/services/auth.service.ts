import { Injectable } from '@angular/core';
import { IUserPayload, mockUserPayload } from '../models/userPayload';
import { Observable, of } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = false

  constructor(private jwtHelper: JwtHelperService) { }

  login(userPayload: IUserPayload): Observable<boolean> {
    const loginSuccess =
      userPayload.username === mockUserPayload.username &&
      userPayload.password === mockUserPayload.password;

    if (loginSuccess) {
      const mockToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
      const tokenCreationTime = new Date().getTime();
      localStorage.setItem('token_creation_time', tokenCreationTime.toString());

      localStorage.setItem('access_token', mockToken);
      console.log('Mock JWT stored:', mockToken);
    }

    return of(loginSuccess);
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('access_token');
    console.log('JWT:', token);
    console.log('JWT expired:', this.jwtHelper.isTokenExpired(token));

    // Check token: null - undefined - expired
    return token != null && !this.jwtHelper.isTokenExpired(token);
  }

  logout(): void {
    localStorage.removeItem('access_token');
  }
}
