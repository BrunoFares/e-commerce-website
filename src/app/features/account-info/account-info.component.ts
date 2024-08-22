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
  jwtUser!: any;
  userIsAdmin!: boolean;

  constructor(private logoutService: LogoutService, private router: Router) { }

  onLogout() {
    this.logoutService.logout(this.accessToken, this.refreshToken);

    localStorage.removeItem('user');
    localStorage.removeItem('jwtUser');

    this.router.navigateByUrl('login');
    location.reload();
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage['user']);
    this.accessToken = this.user.Login.AccessToken;
    this.refreshToken = this.user.Login.RefreshToken;
    this.jwtUser = parseJwt(this.accessToken);

    if (this.jwtUser.realm_access.roles.includes('Admin')) {
      this.userIsAdmin = true;
    }
  }
}
