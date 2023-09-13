import { Component, Input } from '@angular/core';
import { AppRoutes } from 'src/app/app-routing.module';
import { AuthService } from 'src/app/services/auth.service';
import { IUserAuthData } from 'src/app/models/userAuth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  userProfile: IUserAuthData | null = null;

  constructor(private authService: AuthService){
    this.loadUserData();
  }

  loadUserData(){
    const authData = localStorage.getItem('user_auth_data');
    if(authData){
      this.userProfile = JSON.parse(authData);
      console.log('User Profile Loaded:', this.userProfile);
    }
  }


AppRoutes = AppRoutes
}
