import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { AuthAdminService } from "./auth-admin.service";
import * as AppState from './index-admin';
import { Store, select } from "@ngrx/store";
import { isLoggedIn } from "./auth-admin.selectors";
import { Observable, tap } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthAdminGuard implements CanActivate {
  constructor(private store: Store, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
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