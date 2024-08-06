import { Component } from '@angular/core';
import { ChangePassService } from '../service/change-pass.service';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrl: './change-pass.component.scss'
})
export class ChangePassComponent {
  password!: string;
  oldPass!: string;

  constructor(private changePass: ChangePassService) {}

  onSubmit() {
    this.changePass.changePassword(this.password, this.oldPass).subscribe(response => {
      console.log(response);
    })
  }
}
