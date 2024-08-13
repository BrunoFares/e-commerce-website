import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LoginResponse } from '../login/model/login-response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false;
  authUrl = environment.authenticationApi;
  accessToken!: string;

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<LoginResponse> {
    let credentials = {
      Username: email,
      Password: password
    }
    return this.http.post<LoginResponse>(`${this.authUrl}/User/Login()`, credentials)
  }

  refreshToken(token: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.authUrl}/User/RefreshToken()`, token)
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
