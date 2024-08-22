import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { Store, select } from "@ngrx/store";
import { isLoggedIn } from "../auth-user/auth.selectors";
import { Observable, tap } from "rxjs";
import { LoginResponse } from "../login/model/login-response.model";
import { parseJwt } from "../../../shared/utils/jwtParser";
import { login } from "./auth.actions";

@Injectable({
  providedIn: "root",
})
export class AuthAdminGuard implements CanActivate {
  constructor(private store: Store, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const adminString = localStorage.getItem('jwtUser');
    const userString = localStorage.getItem('user');
    let loggedUser;
    let containsAdmin;
    let user: LoginResponse;

    if (adminString && userString) {
      user = JSON.parse(userString)
      this.store.dispatch(login({ user }));

      loggedUser = JSON.parse(adminString);
      containsAdmin = loggedUser.realm_access.roles.includes('Admin');
    }

    if (!containsAdmin) {
      this.router.navigateByUrl('/login');
    }

    return this.store.pipe(
      select(isLoggedIn),
      tap(loggedIn => {
        if (!loggedIn) {
          this.router.navigateByUrl('/login')
        }
      })
    )
  }
}