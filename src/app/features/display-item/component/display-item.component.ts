import { Component, Input, inject } from '@angular/core';
import { DisplayItem } from '../model/display-item.model';
import { DisplayItemService } from '../service/display-item.service';
import { FormControl, FormsModule, NgModel, Validators } from '@angular/forms';
import { CommonModule, DecimalPipe } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { createStore, keys, set } from 'idb-keyval';

@Component({
  selector: 'app-display-item',
  templateUrl: './display-item.component.html',
  styleUrl: './display-item.component.scss',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule]
})
export class DisplayItemComponent {
  item!: DisplayItem;
  itemId: string = '';

  otherItems: DisplayItem[] = [];

  quantity = 1;
  favClicked = false;
  cartClicked = false;

  displayItem = inject(DisplayItemService)
  route = inject(ActivatedRoute)
  router = inject(Router)

  addToShoppingCart() {
    if (this.quantity < 1) {
      alert("Can't place an item with a quantity less than 1.")
      return;
    }

    if (!localStorage.getItem('user')) {
      this.router.navigateByUrl('login');
      return;
    }

    const customStore = createStore('ShoppingCartDB', 'ShoppingCartStore');

    const finalItem = {
      id: this.item.id,
      title: this.item.title,
      category: this.item.category,
      price: this.item.price,
      quantity: this.quantity
    }

    set(this.item.id, finalItem, customStore);

    this.cartClicked = true;
    setInterval(() => this.cartClicked = false, 3000);
  }

  addToFavourites() {
    if (this.quantity < 1) {
      alert("Can't place an item with a quantity less than 1.")
      return;
    }

    if (!localStorage.getItem('user')) {
      this.router.navigateByUrl('login')
    }

    const customStore = createStore('FavouritesDB', 'FavouritesStore');
    set(this.item.id, this.item, customStore);

    this.favClicked = true;
    setInterval(() => this.favClicked = false, 3000);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.itemId = params.get('id') || "";

      this.displayItem.getProduct(+this.itemId.substring(1))
        .subscribe((response: DisplayItem) => {
          this.item = response;
        });
    })

    const ids: number[] = []
    for (let i = 0; i < 8; i++) {
      const randNum = 1 + Math.round(Math.random() * 100000) % 20;

      if (ids.includes(randNum)) {
        i--;
        continue;
      }

      ids.push(randNum);
    }

    ids.map(id => {
      this.displayItem.getProduct(id)
        .subscribe((response: DisplayItem) => {
          this.otherItems.push(response);
        })
    })

    console.log(this.otherItems);
  }
}
