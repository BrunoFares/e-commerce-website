import { createAction, props } from "@ngrx/store";
import { User } from "./user.model";
import { LoginResponse } from "./login/model/login-response.model";

export const login = createAction(
    "[Login Page] User Login",
    props<{user: LoginResponse}>()
)

export const logout = createAction(
    "[Login Page] User Logout"
)