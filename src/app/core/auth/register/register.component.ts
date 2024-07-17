import { Component } from '@angular/core';
import { IRegisterRequest } from './models/register-request.model';
import { RegisterService } from './services/register.service';
import { IRegisterResponse } from './models/register-response.model';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  firstName: string = ""
  lastName: string = ""
  email: string = ""
  password: string = ""

  registerForm = new FormGroup({
    firstName: new FormControl(this.firstName, Validators.required),
    lastName: new FormControl(this.lastName, Validators.required),
    email: new FormControl(this.email, [
      Validators.required, 
      Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)
    ]),
    password: new FormControl(this.password, [
      Validators.required, 
      Validators.minLength(8)
    ]),
  })

  constructor(private registerService: RegisterService) {}

  onSubmit() {
    const request: IRegisterRequest = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      roleName: "user"
    }

    this.registerService.login(request).subscribe((response: IRegisterResponse) => {
      console.log(response);
    }, error => {
      console.log('ERROR');
    })
  }
}
