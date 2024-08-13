import { User } from "./user.model";
import * as AuthActions from "./auth.actions"
import { createReducer, on } from "@ngrx/store";
import { LoginResponse } from "../login/model/login-response.model";

export interface AuthState {
    user?: LoginResponse
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