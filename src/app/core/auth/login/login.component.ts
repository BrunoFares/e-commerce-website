import { Component } from '@angular/core';
import { ILoginRequest } from './models/login-request.model';
import { LoginService } from './services/login.service';
import { ILoginResponse } from './models/login-response.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private loginService: LoginService) {}

  onSubmit(): void {
    const request: ILoginRequest = {
      username: this.username,
      password: this.password
    }

    this.loginService.login(request).subscribe((response: ILoginResponse) => {
      console.log(response);
    }, error => {
      console.log("Account not available")
    });
  }
}
