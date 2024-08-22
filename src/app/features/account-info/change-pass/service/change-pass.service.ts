import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChangePassService {
  authUrl = environment.authenticationApi;
  userToken = JSON.parse(localStorage['user']).Login.AccessToken;

  constructor(private http: HttpClient) { }

  changePassword(newPassword: string, oldPassword: string) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.userToken
    })

    let params = new HttpParams().set('oldPassword', oldPassword);

    const credentials = {
      newPassword: newPassword,
    }

    return this.http.post<any>(`${this.authUrl}/User/ChangePassword()`, credentials, { headers, params });
  }
}
