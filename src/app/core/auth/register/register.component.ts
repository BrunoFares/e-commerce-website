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
  allowed: boolean = true;

  registerForm = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    email: new FormControl("", [
      Validators.required, 
      Validators.email
    ]),
    password: new FormControl("", [
      Validators.required, 
      Validators.minLength(8)
    ]),
  })

  constructor(private registerService: RegisterService) {}

  onSubmit() {
    const request: IRegisterRequest = {
      firstName: this.registerForm.value.firstName || "",
      lastName: this.registerForm.value.lastName || "",
      email: this.registerForm.value.email || "",
      password: this.registerForm.value.password || "",
      roleName: "user"
    }

    this.registerService.login(request).subscribe((response: IRegisterResponse) => {
      console.log(response);
    }, error => {
      this.allowed = false;
    })
  }
}
