import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { ReducerManager, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/app-shell/footer/footer.component';
import { HeaderComponent } from './core/app-shell/header/header.component';
import { LoginComponent } from './core/auth/login/login.component';
import { RegisterComponent } from './core/auth/register/register.component';
import { CreateAdminComponent } from './core/auth/create-admin/create-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NewItemComponent } from './features/new-item/component/new-item.component';
import { HomePageComponent } from './features/home-page/component/home-page.component';
import { CategoriesListingComponent } from './core/app-shell/header/categories-listing/categories-listing.component';
import { authReducer } from './core/auth';
import { AuthEffects } from './core/auth/auth.effects';
import { AuthModule } from './core/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    CreateAdminComponent,
    NewItemComponent,
    HomePageComponent,
    CategoriesListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}),
    StoreModule.forRoot({ login: authReducer}),
    RouterModule.forChild([{path: 'login', component: LoginComponent}]),
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([AuthEffects]),
    AuthModule,
    EffectsModule.forRoot(AuthEffects),
    EffectsModule.forFeature(AuthEffects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
