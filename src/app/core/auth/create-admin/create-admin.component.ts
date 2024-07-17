import { Component } from '@angular/core';
import { ICreateAdminRequest } from './models/create-admin-request.model';
import { CreateAdminService } from './services/create-admin.service';
import { ICreateAdminResponse } from './models/create-admin-response.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrl: './create-admin.component.scss'
})
export class CreateAdminComponent {
  firstName: string = ""
  lastName: string = ""
  email: string = ""
  password: string = ""
  roleName: string = "admin"

  createAdminForm = new FormGroup({
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

  constructor(private createAdminService: CreateAdminService) {}

  onSubmit() {
    const request: ICreateAdminRequest = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      roleName: this.roleName
    }

    this.createAdminService.login(request).subscribe((response: ICreateAdminResponse) => {
      console.log(response);
    }, error => {
      console.log('ERROR');
    })
  }
}
