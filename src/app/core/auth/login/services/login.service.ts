import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ILoginRequest } from '../models/login-request.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // fetch the url for the api
  private authUrl = environment.authenticationApi;

  // establish an http client
  constructor(private http: HttpClient) { }

  // return a post request using the correct method from the api and the input request
  login(request: ILoginRequest) {
    return this.http.post<ILoginRequest>(`${this.authUrl}/User/Login()`, request);
  }
}
