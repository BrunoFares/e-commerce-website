import { User } from "./admin.model";
import * as AuthAdminActions from "./auth-admin.actions"
import { createReducer, on } from "@ngrx/store";
import { LoginResponse } from "../login/model/login-response.model";

export interface AuthAdminState {
    user?: LoginResponse
}

export const initialAuthState: AuthAdminState = {
    user: undefined,
}

export const authReducer = createReducer(
    initialAuthState,
    on(AuthAdminActions.loginAdmin, (state, action) => {
        return {
            user: action.user
        }
    }),
    on(AuthAdminActions.logoutAdmin, (state, action) => {
        return {
            user: undefined
        }
    })
)