import { Component, Input } from '@angular/core';
import { AppRoutes } from 'src/app/app-routing.module';
import { AuthService } from 'src/app/services/auth.service';
import { IUserAuthData } from 'src/app/models/userAuth';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  userProfile: IUserAuthData | null = null;

  constructor(private authService: AuthService, private userService: UserService) {
     this.loadUserData();
  this.userService.userAuthData$.subscribe(data => {
    this.userProfile = data;
  });
}

loadUserData() {
  console.log('loadUserData called');
  const authData = localStorage.getItem('user_auth_data');
  console.log('Auth data from local storage:', authData);
  if (authData) {
    try {
      this.userProfile = JSON.parse(authData);
      console.log('PARSING OK! USER PROFILE Loaded:', this.userProfile);
    } catch (error) {
      console.error('Error parsing user auth data:', error);
      this.userProfile = null;
    }
  } else {
    console.log('No auth data found in local storage');
  }
}


AppRoutes = AppRoutes
}
