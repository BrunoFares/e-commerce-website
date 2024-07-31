import { Component, Input, inject } from '@angular/core';
import { DisplayItem } from '../model/display-item.model';
import { DisplayItemService } from '../service/display-item.service';
import { FormControl, FormsModule, NgModel, Validators } from '@angular/forms';
import { CommonModule, DecimalPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-item',
  templateUrl: './display-item.component.html',
  styleUrl: './display-item.component.scss',
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class DisplayItemComponent {
  item!: DisplayItem;
  itemId: string = '';

  quantity = 1;
  form = new FormControl('', Validators.min(1));

  displayItem = inject(DisplayItemService)
  route = inject(ActivatedRoute)

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.itemId = params.get('id') || "";

      this.displayItem.getProduct(+this.itemId.substring(1))
        .subscribe((response: DisplayItem) => {
          this.item = response;
          console.log(this.itemId)
      });
    })
  }
}
