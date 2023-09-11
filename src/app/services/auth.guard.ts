import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AppRoutes } from '../app-routing.module';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if(this.authService.isLoggedIn()){
      return true
    } else {
      this.router.navigate([AppRoutes.LOGIN])
      return false
    }
  }
}


