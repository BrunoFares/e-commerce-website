import { Component, OnInit } from '@angular/core';
import { Validators, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
// import { AuthAdminService } from '../auth-admin/auth-admin.service';
import { AppState } from "../../../reducers/index"
import { Store } from '@ngrx/store';
import { noop, tap } from 'rxjs';
// import { loginAdmin } from '../auth-admin/auth-admin.actions';
import { login } from '../auth-user/auth.actions';
import { LoginResponse } from './model/login-response.model';
import { parseJwt } from '../../../shared/utils/jwtParser';
import { AuthService } from '../auth-user/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  allowed: boolean = true;
  loggedUser!: any;
  form: UntypedFormGroup;

  constructor(private auth: AuthService,
    private router: Router,
    private fb: UntypedFormBuilder,
    private store: Store<AppState>) {
    this.form = fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  ngOnInit() { }

  onSubmit(): void {
    const val = this.form.value;

    this.auth.login(val.email, val.password).pipe(
      tap((user: any) => {
        this.loggedUser = JSON.stringify(parseJwt(user.Login.AccessToken));
        localStorage.setItem('jwtUser', this.loggedUser);

        this.store.dispatch(login({ user }))
        this.router.navigateByUrl('')
      })
    ).subscribe(
      noop,
      () => alert('Login Failed')
    )
  }
}
