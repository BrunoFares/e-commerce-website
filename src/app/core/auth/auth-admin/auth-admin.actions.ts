import { createAction, props } from "@ngrx/store";
import { User } from "./admin.model";
import { LoginResponse } from "../login/model/login-response.model";

export const loginAdmin = createAction(
    "[Login Page] Admin Login",
    props<{ user: LoginResponse }>()
)

export const logoutAdmin = createAction(
    "[Login Page] Admin Logout"
)