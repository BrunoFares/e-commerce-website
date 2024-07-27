import { Component, Input } from '@angular/core';
import { DisplayItem } from '../model/display-item.model';
import { DisplayItemService } from '../service/display-item.service';
import { FormControl, Validators } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-item',
  templateUrl: './display-item.component.html',
  styleUrl: './display-item.component.scss'
})
export class DisplayItemComponent {
  item!: DisplayItem;
  quantity = 1;
  form = new FormControl('', Validators.min(1));

  @Input() itemId!: string;

  constructor(private displayItem: DisplayItemService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.itemId = params.get('id') || "";
      this.displayItem.getProduct(+this.itemId[1]).subscribe((response: DisplayItem) => {
        this.item = response;
      });
    })
  }
}
