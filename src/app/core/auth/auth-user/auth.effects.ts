import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { AuthActions } from "./action-types";
import { tap } from "rxjs";
import { Router } from "@angular/router";
import { parseJwt } from "../../../shared/utils/jwtParser";

@Injectable()
export class AuthEffects {

    constructor(private actions$: Actions, private router: Router) { }

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.login),
            tap((action: any) => {
                localStorage.setItem('user', JSON.stringify(action.user))
            }
            )

        ), { dispatch: false }
    )

    logout$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.logout),
            tap(action => {
                localStorage.removeItem('user');
                this.router.navigateByUrl('/login');
            }
            )), { dispatch: false }
    )
}