import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { AuthAdminActions } from "./action-types-admin";
import { tap } from "rxjs";
import { Router } from "@angular/router";

@Injectable()
export class AuthAdminEffects {

    constructor(private actions$: Actions, private router: Router) { }

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthAdminActions.loginAdmin),
            tap(action => localStorage.setItem(
                'admin', JSON.stringify(action.user))
            )
        ), { dispatch: false }
    )

    logout$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthAdminActions.logoutAdmin),
            tap(action => {
                localStorage.removeItem('user');
                this.router.navigateByUrl('/login');
            }
            )), { dispatch: false }
    )
}