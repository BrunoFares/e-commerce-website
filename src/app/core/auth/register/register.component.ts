import { Component } from '@angular/core';
import { IRegisterRequest } from './models/register-request.model';
import { RegisterService } from './services/register.service';
import { IRegisterResponse } from './models/register-reponse.model';

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
  roleName: string = ""

  constructor(private registerService: RegisterService) {}

  onSubmit() {
    const request: IRegisterRequest = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      roleName: this.roleName
    }

    this.registerService.login(request).subscribe((response: IRegisterResponse) => {
      console.log(response);
    }, error => {
      console.log('ERROR');
    })
  }
}
