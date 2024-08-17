import { Component, OnInit } from '@angular/core';
import { createStore, entries, del, update } from 'idb-keyval';

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

  changeQuantity(id: number) {
    let i;
    for (i = 0; i < this.rowData.length; i++) {
      if (this.rowData[i][0] === id) break;
    }
    update(id, data => ({
      title: this.rowData[i][1].title,
      id: this.rowData[i][1].id,
      price: this.rowData[i][1].price,
      quantity: this.rowData[i][1].quantity,
      category: this.rowData[i][1].category
    }), this.customStore)
    this.ngOnInit();
  }

  onRemove(id: number) {
    del(id, this.customStore);
    this.ngOnInit();
  }

  ngOnInit() {
    this.customStore = createStore('ShoppingCartDB', 'ShoppingCartStore');

    entries(this.customStore).then((data) => {
      this.rowData = data.map(item => item);
      this.totalCost = 0;

      this.rowData.map(data => {
        this.totalCost += data[1].price * data[1].quantity;
      })
    });
  }
}
