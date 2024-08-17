import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {
  choices = [true, false, false, false, false]

  chooseDash(choice: number) {
    const btns = document.querySelectorAll('div.cats button');
    for (let i = 0; i < this.choices.length; i++) {
      this.choices[i] = false;
      btns[i].classList.remove('chosen-cat')
    }
    this.choices[choice] = true;
    btns[choice].classList.add('chosen-cat')
  }

  rowData = [
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ];

  colDefs: ColDef[] = [
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" }
  ];
}
