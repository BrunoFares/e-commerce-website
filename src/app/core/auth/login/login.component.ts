import { Component } from '@angular/core';
import { ILoginRequest } from './models/login-request.model';
import { LoginService } from './services/login.service';
import { ILoginResponse } from './models/login-response.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private loginService: LoginService) {}

  loginForm = new FormGroup({
    username: new FormControl(this.username, Validators.required),
    password: new FormControl(this.password, Validators.required),
  })

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
