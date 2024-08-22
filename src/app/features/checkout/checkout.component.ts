import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { createStore, del, get } from 'idb-keyval';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent implements OnInit {
  rowData: any[] = [];
  totalCost = 0;
  shippingCost = 8.67;
  promoCode!: string;
  customStore: any;
  form: UntypedFormGroup;

  tempUser: any = localStorage.getItem('jwtUser')
  jwtUser = JSON.parse(this.tempUser);

  constructor(private fb: UntypedFormBuilder, private router: Router) {
    this.form = fb.group({
      cardNo: ['', [Validators.required, Validators.minLength(16)]],
      cardName: ['', [Validators.required]],
      month: ['', [Validators.required]],
      year: ['', [Validators.required]],
      special: ['', [Validators.required, Validators.min(100), Validators.max(999)]]
    })
  }

  onSubmit() {
    del(this.jwtUser.email, this.customStore);
    this.router.navigateByUrl('');
  }

  ngOnInit() {
    this.customStore = createStore('ShoppingCartDB', 'ShoppingCartStore');

    get(this.jwtUser.email, this.customStore).then((data) => {
      this.rowData = data.map((item: any) => item);
      this.totalCost = 0;

      this.rowData.map(data => {
        console.log(this.totalCost);
        this.totalCost += data.price * data.quantity;
      })
    });
  }
}
