import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthAdminState } from "./index-admin";

export const selectAuthAdminState = createFeatureSelector<AuthAdminState>('auth')

export const isLoggedIn = createSelector(
    selectAuthAdminState,
    auth => !!auth.user
)

export const isLoggedOut = createSelector(
    isLoggedIn,
    loggedIn => !loggedIn
)