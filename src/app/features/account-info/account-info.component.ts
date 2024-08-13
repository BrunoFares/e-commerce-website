import { Component } from '@angular/core';
import { parseJwt } from '../../shared/utils/jwtParser';
import { LogoutService } from './logout/logout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrl: './account-info.component.scss'
})
export class AccountInfoComponent {
  accessToken!: string;
  refreshToken!: string;
  user!: any;
  userIsAdmin!: any

  constructor(private logoutService: LogoutService, private router: Router) { }

  onLogout() {
    this.logoutService.logout(this.accessToken, this.refreshToken);

    if (this.userIsAdmin) {
      localStorage.removeItem('admin');
    } else {
      localStorage.removeItem('user');
    }
    localStorage.removeItem('jwtUser');

    this.router.navigateByUrl('login');
  }

  ngOnInit() {
    if (localStorage.getItem('admin') === null) {
      this.accessToken = JSON.parse(localStorage['user']).Login.AccessToken;
      this.refreshToken = JSON.parse(localStorage['user']).Login.RefreshToken;
    }
    else {
      this.userIsAdmin = true;
      this.accessToken = JSON.parse(localStorage['admin']).Login.AccessToken;
      this.refreshToken = JSON.parse(localStorage['admin']).Login.RefreshToken;
    }
    this.user = parseJwt(this.accessToken);
    console.log(this.user);
  }
}
