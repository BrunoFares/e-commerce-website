import { Component, OnInit } from '@angular/core';
import { ChangePassService } from '../service/change-pass.service';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrl: './change-pass.component.scss'
})
export class ChangePassComponent {
  newPass!: string;
  oldPass!: string;
  newPassAgain!: string;
  passMatch = false;
  invalidPass = false;

  constructor(private changePass: ChangePassService) { }

  onSubmit() {
    this.passMatch = false;
    this.invalidPass = false;

    if (this.newPassAgain !== this.newPass) {
      this.passMatch = true;
      return;
    }
    else if (this.newPass.includes(' ')) {
      this.invalidPass = true;
      return;
    }

    this.changePass.changePassword(this.newPass, this.oldPass).subscribe(response => {
      console.log(response);
    }, error => {
      alert('Could not change password. Check the spelling of your old password and try again.')
    })
  }
}
