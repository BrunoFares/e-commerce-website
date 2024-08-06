import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChangePassService {
  authUrl = environment.authenticationApi;

  constructor(private http: HttpClient) { }

  changePassword(newPass: string, oldPass: string) {
    return this.http.post<any>(`${this.authUrl}/User/ChangePassword()`, { newPass, oldPass });
  }
}
