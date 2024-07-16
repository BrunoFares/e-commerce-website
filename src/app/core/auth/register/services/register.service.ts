import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { IRegisterRequest } from '../models/register-request.model';
import { IRegisterResponse } from '../models/register-reponse.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private authUrl = environment.authenticationApi;

  constructor(private http: HttpClient) { }

  login(request: IRegisterRequest) {
    this.http.post<IRegisterResponse>(`${this.authUrl}/User/SignUp()`, request)
  }
}
