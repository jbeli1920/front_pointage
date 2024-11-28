import { Component } from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import { LoginService } from './login.service';
import { UserLoginDTO } from '../Model/UserLoginDTO';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [RouterModule, FormsModule, HttpClientModule],
  providers: [LoginService],
  standalone: true
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private loginService: LoginService, private router: Router) {}

  onLogin() {
    const userLoginDTO = new UserLoginDTO(this.email, this.password);
    this.loginService.login(this.email, this.password).subscribe(
      response => {
        // Handle successful login
        localStorage.setItem('user', response);
        this.router.navigate(['../profile'], { state: { user: response } });
      },
      error => {
        // Handle login error
        this.errorMessage = error;
        console.error('Login failed', error);
      }
    );
  }
}
