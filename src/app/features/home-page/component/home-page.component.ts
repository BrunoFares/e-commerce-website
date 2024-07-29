import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DisplayItemService } from '../../display-item/service/display-item.service';
import { DisplayItem } from '../../display-item/model/display-item.model';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  items: DisplayItem[] = [];

  constructor(private displayItem: DisplayItemService) {}

  ngOnInit() {
    const ids: number[] = []
    for (let i = 0; i < 3; i++) {
      const randNum = 1 + Math.round(Math.random() * 100000) % 20;
      
      if (ids.includes(randNum)) {
        i--;
        continue;
      }

      ids.push(randNum);
    }

    ids.map(id => { this.displayItem.getProduct(id)
        .subscribe((response: DisplayItem) => {
          console.log(this.items)
          this.items.push(response);
        })
    })
  }
}
