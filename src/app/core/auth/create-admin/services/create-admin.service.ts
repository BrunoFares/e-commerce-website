import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ICreateAdminRequest } from '../models/create-admin-request.model';
import { ICreateAdminResponse } from '../models/create-admin-response.model';

@Injectable({
  providedIn: 'root'
})
export class CreateAdminService {
  private authUrl = environment.authenticationApi;

  constructor(private http: HttpClient) { }

  login(request: ICreateAdminRequest) {
    return this.http.post<ICreateAdminResponse>(`${this.authUrl}/User/CreateAdminUser()`, request)
  }
}
