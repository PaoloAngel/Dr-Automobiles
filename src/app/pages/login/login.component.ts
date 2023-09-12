import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';  // Import Router from @angular/router
import { AppRoutes } from 'src/app/app-routing.module';
import { IUserPayload } from 'src/app/models/userPayload';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = new FormGroup ({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  constructor(private authService: AuthService, private router: Router) {}

  onSubmitLoginForm(){
    if(this.loginForm.valid){
      const formValue = this.loginForm.value;
      const userPayload: IUserPayload = {
        username: formValue.username!,
        password: formValue.password!,
        role: 'admin'
      };
      this.authService.login(userPayload).subscribe(loginSuccess => {
        if (loginSuccess) {
          console.log('Login successful');
          this.router.navigate([AppRoutes.HOME]);
        } else {
          console.error('Invalid username or password');
        }
      });
    } else {
      console.error('Form is not valid');
    }
  }
  logout(){
  }
}

