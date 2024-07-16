import { Component } from '@angular/core';

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

  constructor() {}

  onSubmit() {}
}
