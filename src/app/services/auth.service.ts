import { Injectable } from '@angular/core';
import { IUserPayload, mockUserPayload } from '../models/userPayload';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';
import { jwtToken } from '../environments/mockJWT';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = false

  constructor(
    private jwtHelper: JwtHelperService,
    private http: HttpClient,
    private userService: UserService) { }


  login(userPayload: IUserPayload): Observable<boolean> {
    const loginSuccess =
      userPayload.username === mockUserPayload.username &&
      userPayload.password === mockUserPayload.password;

    if (loginSuccess) {
      const mockToken = jwtToken.mockToken;
      const tokenCreationTime = new Date().getTime();
      localStorage.setItem('token_creation_time', tokenCreationTime.toString());

      localStorage.setItem('access_token', mockToken); // JWT TOKEN
      console.log('Mock JWT stored:', mockToken);

      localStorage.setItem('user_role', userPayload.role); // USER ROLE
      console.log('Mock role stored:', userPayload.role);

      return this.userAuthData().pipe(
        map(() => loginSuccess)
      );
    } else {
      return throwError(() => new Error('Login Failed'));
    }
  }

private userAuthData(): Observable<any> {
  return this.http.get('/assets/data/auth.json').pipe(
    map((authData: any) => {
      // Decode the JWT to get the user data
      const decodedToken = this.jwtHelper.decodeToken(authData.jwt);
      console.log('Decoded Token:', decodedToken);

      // Store the decoded token in local storage
      localStorage.setItem('user_auth_data', JSON.stringify(decodedToken));
      return decodedToken;
    }),
    tap((decodedToken: any) => {
      console.log('User Auth data stored:', decodedToken);
      console.log('Name:', decodedToken.name);
      console.log('Surname:', decodedToken.surname);

      // Update the user data in the UserService
      this.userService.updateUserAuthData(decodedToken);
    }),
    catchError(error => {
      console.error('Error loading auth data:', error);
      return throwError(() => new Error('User Auth data not stored'));
    })
  );
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
