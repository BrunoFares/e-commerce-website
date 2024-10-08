import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";
import * as AppState from './index';
import { Store, select } from "@ngrx/store";
import { isLoggedIn } from "./auth.selectors";
import { Observable, tap } from "rxjs";
import { login } from "./auth.actions";
import { LoginResponse } from "../login/model/login-response.model";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const userString = localStorage.getItem('user');
    if (userString) {
      const user: LoginResponse = JSON.parse(userString)
      this.store.dispatch(login({ user }));
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