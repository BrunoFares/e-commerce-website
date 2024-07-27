import { Component, Input } from '@angular/core';
import { DisplayItem } from '../model/display-item.model';
import { DisplayItemService } from '../service/display-item.service';
import { FormControl, Validators } from '@angular/forms';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-display-item',
  templateUrl: './display-item.component.html',
  styleUrl: './display-item.component.scss'
})
export class DisplayItemComponent {
  item!: DisplayItem;
  quantity = 1;
  form = new FormControl('', Validators.min(1));

  @Input() itemId!: number;

  constructor(private displayItem: DisplayItemService) {}

  ngOnInit() {
    this.displayItem.getProduct(1).subscribe((response: DisplayItem) => {
      this.item = response;
    });
  }
}
