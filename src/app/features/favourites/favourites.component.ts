import { Component } from '@angular/core';
import { createStore, get, update } from 'idb-keyval';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.scss'
})
export class FavouritesComponent {
  rowData: any[] = [];
  customStore: any;
  tempUser: any = localStorage.getItem('jwtUser')
  jwtUser = JSON.parse(this.tempUser);

  onRemove(id: number) {
    update(this.jwtUser.email, data => {
      data = data.filter((item: any) => item.id !== id);
      return data;
    }, this.customStore)
    this.ngOnInit();
  }

  ngOnInit() {
    this.customStore = createStore('FavouritesDB', 'FavouritesStore');

    get(this.jwtUser.email, this.customStore).then((data) => {
      this.rowData = data.map((item: any) => item);
    });
  }
}
