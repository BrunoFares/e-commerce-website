import { ModuleWithProviders, NgModule } from "@angular/core";
import { AuthService } from "./auth.service";
import { AuthGuard } from "./auth.guard";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "../login/login.component";
import { StoreModule } from "@ngrx/store";
import { authReducer } from ".";
import { EffectsModule } from "@ngrx/effects";
import { AuthEffects } from "./auth.effects";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        RouterModule.forChild([{ path: 'login', component: LoginComponent }]),
        StoreModule.forFeature('auth', authReducer),
        EffectsModule.forFeature([AuthEffects])
    ],
    declarations: [],
    exports: []
})
export class AuthModule {
    static forRoot(): ModuleWithProviders<AuthModule> {
        return {
            ngModule: AuthModule,
            providers: [AuthService, AuthGuard]
        }
    }
}