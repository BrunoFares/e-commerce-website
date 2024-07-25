import { Component } from '@angular/core';
import { ILoginRequest } from './models/login-request.model';
import { LoginService } from './services/login.service';
import { ILoginResponse } from './models/login-response.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username = ''
  password = ''
  token = '';
  error = '';
  isLoading = false;
  allowed: boolean = true;

  constructor(private loginService: LoginService, private router: Router) {}

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  onSubmit(): void {
    const request: ILoginRequest = {
      username: this.loginForm.value.username || "",
      password: this.loginForm.value.password || ""
    }

    this.loginService.login(request).subscribe((response: ILoginResponse) => {
      this.router.navigateByUrl('../');
    }, error => {
      this.allowed = false;
    });
  }
}
