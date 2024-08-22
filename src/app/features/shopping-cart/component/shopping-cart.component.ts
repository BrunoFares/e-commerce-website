import { Component, OnInit } from '@angular/core';
import { createStore, update, get } from 'idb-keyval';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent implements OnInit {
  rowData: any[] = [];
  totalCost = 0;
  shippingCost = 8.67;
  promoCode!: string;
  customStore: any;
  quantity!: number;

  tempUser: any = localStorage.getItem('jwtUser')
  jwtUser = JSON.parse(this.tempUser);

  changeQuantity(id: number) {
    let i;
    for (i = 0; i < this.rowData.length; i++) {
      if (this.rowData[i].id === id) break;
    }
    update(this.jwtUser.email, data => {
      const newItem = {
        title: this.rowData[i].title,
        id: this.rowData[i].id,
        price: this.rowData[i].price,
        quantity: this.rowData[i].quantity,
        category: this.rowData[i].category
      }
      data[i] = newItem;
      return data;
    }, this.customStore)
    this.ngOnInit();
  }

  onRemove(id: number) {
    update(this.jwtUser.email, data => {
      data = data.filter((item: any) => item.id !== id);
      return data;
    }, this.customStore)
    this.ngOnInit();
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
