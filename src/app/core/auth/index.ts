import { User } from "./user.model";
import * as AuthActions  from "./auth.actions"
import { createReducer, on } from "@ngrx/store";

export interface AuthState {
    user?: User
}

export const initialAuthState: AuthState = {
    user: undefined,
}

export const authReducer = createReducer(
    initialAuthState,
    on(AuthActions.login, (state, action) => {
        return {
            user: action.user
        }
    }),
    on(AuthActions.logout, (state, action) => {
        return {
            user: undefined
        }
    })
)