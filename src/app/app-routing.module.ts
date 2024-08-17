import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/auth/login/login.component';
import { RegisterComponent } from './core/auth/register/register.component';
import { CreateAdminComponent } from './core/auth/create-admin/create-admin.component';
import { HomePageComponent } from './features/home-page/component/home-page.component';
import { NewItemComponent } from './features/new-item/component/new-item.component';
import { DisplayItemComponent } from './features/display-item/component/display-item.component';
import { ListItemsComponent } from './features/list-items/component/list-items.component';
import { AdminDashboardComponent } from './features/admin-dashboard/main/admin-dashboard.component';
import { AboutUsComponent } from './features/about-us/about-us.component';
import { ShoppingCartComponent } from './features/shopping-cart/component/shopping-cart.component';
import { AuthGuard } from './core/auth/auth-user/auth.guard';
import { AccountInfoComponent } from './features/account-info/account-info.component';
import { ChangePassComponent } from './features/account-info/change-pass/component/change-pass.component';
import { AuthAdminGuard } from './core/auth/auth-admin/auth-admin.guard';
import { FavouritesComponent } from './features/favourites/favourites.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'create-admin', component: CreateAdminComponent },
  { path: '', component: HomePageComponent },
  { path: 'new-item', component: NewItemComponent },
  { path: 'products', component: ListItemsComponent },
  { path: 'products/:category', component: ListItemsComponent },
  { path: 'item/:id', loadComponent: () => import('./features/display-item/component/display-item.component').then(m => m.DisplayItemComponent) },
  { path: 'dashboard', component: AdminDashboardComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent, canActivate: [AuthGuard] },
  { path: 'account', component: AccountInfoComponent, canActivate: [AuthGuard, AuthAdminGuard] },
  { path: 'account/change-pass', component: ChangePassComponent, canActivate: [AuthGuard, AuthAdminGuard] },
  { path: 'favourites', component: FavouritesComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
