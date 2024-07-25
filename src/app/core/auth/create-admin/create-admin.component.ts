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
  roleName: string = "admin"

  createAdminForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required, 
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required, 
      Validators.minLength(8)
    ]),
  })

  constructor(private createAdminService: CreateAdminService) {}

  onSubmit() {
    const request: ICreateAdminRequest = {
      firstName: this.createAdminForm.value.firstName || "",
      lastName: this.createAdminForm.value.lastName || "",
      email: this.createAdminForm.value.email || "",
      password: this.createAdminForm.value.password || "",
      roleName: this.roleName
    }

    this.createAdminService.login(request).subscribe((response: ICreateAdminResponse) => {
      console.log(response);
    }, error => {
      console.log('ERROR');
    })
  }
}
