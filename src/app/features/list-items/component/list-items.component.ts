import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ListItemsService } from '../service/list-items.service';
import { ListItems } from '../model/list-items.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.scss'
})
export class ListItemsComponent implements OnInit {
  originalItems!: ListItems[];
  displayedItems!: ListItems[];
  category?: string;
  catFilters: string[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient, private listItems: ListItemsService) {}

  filt(filt: string) {

    if (this.catFilters.indexOf(filt) != -1) {
      this.catFilters.splice(this.catFilters?.indexOf(filt), 1);
    }
    else {
      this.catFilters.push(filt);
    }
    
    this.displayedItems = this.originalItems;
    this.displayedItems = this.originalItems.filter(item => {
      if (this.catFilters.length === 0) {
        return true;
      }
      for (let cat of this.catFilters) {
        if (cat == item.category) {
          return true;
        }
      }
      return false;
    });

    console.log(this.catFilters)
    return this.displayedItems;
  }

  routing(item: number): string {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category') || "";
    })

    if (this.category == '') {
      return `../item/:${item}`
    }
    else {
      return `../../item/:${item}`
    }
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category') || "";
      
      this.listItems.getProductsFromCat(this.category.substring(1))
        .subscribe((response: ListItems[]) => {
          this.originalItems = response;
          this.displayedItems = response;
      });
    })
  }
}
