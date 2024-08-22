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

  constructor(private route: ActivatedRoute, private listItems: ListItemsService) { }

  sort(sorter: string) {
    switch (sorter) {
      case 'alph-small':
        this.displayedItems = this.displayedItems.sort((a, b) => {
          if (a.title < b.title) {
            return -1;
          } else if (a.title > b.title) {
            return 1;
          }
          return 0;
        })
        break;
      case "alph-large":
        this.displayedItems = this.displayedItems.sort((a, b) => {
          if (a.title < b.title) {
            return 1;
          } else if (a.title > b.title) {
            return -1;
          }
          return 0;
        })
        break;
      case "price-small":
        this.displayedItems = this.displayedItems.sort((a, b) => b.price - a.price)
        break;
      case 'price-big':
        this.displayedItems = this.displayedItems.sort((a, b) => a.price - b.price)
        break;
      case 'popular':
        this.displayedItems = this.displayedItems.sort((a, b) => a.id - b.id)
        break;
    }
  }

  filtByCat(filt: string) {
    if (filt == '') {
      this.displayedItems = this.originalItems;
      return this.displayedItems;
    }

    if (this.catFilters.indexOf(filt) != -1) {
      this.catFilters.splice(this.catFilters?.indexOf(filt), 1);
    }
    else {
      this.catFilters.push(filt);
    }

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

    return this.displayedItems;
  }

  routing(item: number): string {
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
      const catName = this.category.substring(1);

      if (this.category !== '') {
        let name = catName;

        if (catName === "men's%20clothing") {
          this.catFilters.push("men's clothing");
          name = "mens-clothing";
        }
        else if (catName === "women's%20clothing") {
          this.catFilters.push("women's clothing");
          name = "womens-clothing";
        }
        else {
          this.catFilters.push(name);
        }

        let input: HTMLInputElement | null = document.querySelector(`input#${name}`);
        input!.checked = true;
      }

      this.listItems.getProductsFromCat(catName)
        .subscribe((response: ListItems[]) => {
          this.displayedItems = response;
        });
    })

    if (this.originalItems === undefined) {
      this.listItems.getProductsFromCat('')
        .subscribe((response: ListItems[]) => {
          this.originalItems = response;
        });
    }
  }
}
