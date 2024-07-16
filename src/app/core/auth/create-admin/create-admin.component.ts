import { Component } from '@angular/core';
import { ICreateAdminRequest } from './models/create-admin-request.model';
import { CreateAdminService } from './services/create-admin.service';
import { ICreateAdminResponse } from './models/create-admin-response.model';

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
