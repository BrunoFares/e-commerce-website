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
  slideShow = [true, false, false];

  slide(num: number) {
    let i;
    for (i = 0; i < 3; i++) {
      if (this.slideShow[i]) break;
    }
    for (let j = 0; j < 3; j++) {
      this.slideShow[j] = false;
    }
    this.slideShow[((i + num) + 3) % 3] = true;
  }

  constructor(private displayItem: DisplayItemService) { }

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

    ids.map(id => {
      this.displayItem.getProduct(id)
        .subscribe((response: DisplayItem) => {
          this.items.push(response);
        })
    })

    setInterval(() => {
      this.slide(1);
    }, 5000)
  }
}
