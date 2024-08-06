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
import { DisplayItemComponent } from './features/display-item/component/display-item.component';
import { ListItemsComponent } from './features/list-items/component/list-items.component';
import { AdminDashboardComponent } from './features/admin-dashboard/main/admin-dashboard.component';
import { HeaderDashboardComponent } from './features/admin-dashboard/header-dashboard/header-dashboard/header-dashboard.component';
import { AboutUsComponent } from './features/about-us/about-us.component';
import { ShoppingCartComponent } from './features/shopping-cart/component/shopping-cart.component';
import { AgGridAngular } from 'ag-grid-angular';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { AccountInfoComponent } from './features/account-info/account-info.component';
import { ChangePassComponent } from './features/account-info/change-pass/component/change-pass.component';

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
    CategoriesListingComponent,
    ListItemsComponent,
    AdminDashboardComponent,
    HeaderDashboardComponent,
    AboutUsComponent,
    ShoppingCartComponent,
    AccountInfoComponent,
    ChangePassComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AgGridAngular,
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
