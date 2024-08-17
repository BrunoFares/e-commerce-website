import { Component } from '@angular/core';
import { createStore, values, del, entries } from 'idb-keyval';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.scss'
})
export class FavouritesComponent {
  rowData: any[] = [];
  customStore: any;

  onRemove(id: number) {
    console.log(id);
    del(id, this.customStore);
    this.ngOnInit();
  }

  ngOnInit() {
    this.customStore = createStore('FavouritesDB', 'FavouritesStore');

    entries(this.customStore).then((data) => {
      this.rowData = data.map(item => item)
      console.log(this.rowData)
    });
  }
}
