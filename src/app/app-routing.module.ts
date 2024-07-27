import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/auth/login/login.component';
import { RegisterComponent } from './core/auth/register/register.component';
import { CreateAdminComponent } from './core/auth/create-admin/create-admin.component';
import { HomePageComponent } from './features/home-page/component/home-page.component';
import { NewItemComponent } from './features/new-item/component/new-item.component';
import { DisplayItemComponent } from './features/display-item/component/display-item.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'create-admin', component: CreateAdminComponent },
  { path: '', component: HomePageComponent },
  { path: 'new-item', component: NewItemComponent },
  { path: 'item/:id', component: DisplayItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
