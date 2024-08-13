import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class LogoutService {
    authUrl = environment.authenticationApi;

    constructor(private http: HttpClient) { }

    logout(token: string, refreshToken: string) {
        return this.http.post<any>(`${this.authUrl}/User/Logout()`, { token, refreshToken });
    }
}
