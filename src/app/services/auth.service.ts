import { Injectable } from '@angular/core';
import { IUserPayload, mockUserPayload } from '../models/userPayload';
import { Observable, of, throwError } from 'rxjs';
import { jwtToken } from '../environments/mockJWT';
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
      const mockToken = jwtToken.mockToken
      const tokenCreationTime = new Date().getTime();
      localStorage.setItem('token_creation_time', tokenCreationTime.toString());

      localStorage.setItem('access_token', mockToken); // JWT TOKEN
      console.log('Mock JWT stored:', mockToken);

      localStorage.setItem('user_role', userPayload.role);
      console.log('Mock role stored:', userPayload.role); // USER ROLE
    }

    if (loginSuccess) {
      // ...
      return of(loginSuccess);
    } else {
      return throwError(() => new Error('Login Failed'));
    }

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
    localStorage.removeItem('user_role');
  }
}
