import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AppState } from "../../../reducers/index"
import { Store } from '@ngrx/store';
import { noop, tap } from 'rxjs';
import { login } from '../auth.actions';
import { LoginResponse } from './model/login-response.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  allowed: boolean = true;
  loggedUser!: LoginResponse;
  form: UntypedFormGroup;

  constructor(private auth: AuthService,
    private router: Router,
    private fb: UntypedFormBuilder,
    private store: Store<AppState>) {
      this.form = fb.group({
        email: ['faresbruno04@gmail.com', [Validators.required]],
        password: ['password123', [Validators.required]]
      })
  }

  ngOnInit() {}

  onSubmit(): void {
    const val = this.form.value;

    this.auth.login(val.email, val.password).pipe(
      tap(user => {
        this.loggedUser = user;
        this.store.dispatch(login({user}))
        this.router.navigateByUrl('')
      })
    ).subscribe(
      noop,
      () => alert('Login Failed')
    )
  }
}
