import { ModuleWithProviders, NgModule } from "@angular/core";
import { AuthAdminService } from "./auth-admin.service";
import { AuthAdminGuard } from "./auth-admin.guard";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "../login/login.component";
import { StoreModule } from "@ngrx/store";
import { authReducer } from "./index-admin";
import { EffectsModule } from "@ngrx/effects";
import { AuthAdminEffects } from "./auth-admin.effects";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        RouterModule.forChild([{ path: 'login', component: LoginComponent }]),
        StoreModule.forFeature('auth', authReducer),
        EffectsModule.forFeature([AuthAdminEffects])
    ],
    declarations: [],
    exports: []
})
export class AuthAdminModule {
    static forRoot(): ModuleWithProviders<AuthAdminModule> {
        return {
            ngModule: AuthAdminModule,
            providers: [AuthAdminService, AuthAdminGuard]
        }
    }
}