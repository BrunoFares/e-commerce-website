import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false;
  authUrl = environment.authenticationApi;
  accessToken!: string;

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<User> {
    let credentials ={
      Username: email,
      Password: password
    }
    return this.http.post<User>(`${this.authUrl}/User/Login()`, credentials)
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
