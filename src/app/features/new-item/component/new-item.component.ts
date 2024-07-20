import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NewItemRequest } from '../models/new-item-request.model';
import { NewItemService } from '../services/new-item.service';
import { NewItemResponse } from '../models/new-item-response.model';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrl: './new-item.component.scss'
})
export class NewItemComponent {
  title!: string;
  price!: number;
  description!: string;
  image!: string;
  category!: string;

  constructor(private newItemService: NewItemService) {}

  itemForm = new FormGroup({
    title: new FormControl(this.title, Validators.required),
    price: new FormControl(this.price, Validators.required),
    description: new FormControl(this.description, Validators.required),
    image: new FormControl(this.image, Validators.required),
    category: new FormControl(this.category, Validators.required)
  })

  onSubmit() {
    const newItem = {
      title: this.title,
      price: this.price,
      description: this.description,
      image: this.image,
      category: this.category
    }

    this.newItemService.createNewItem(newItem).subscribe((response: NewItemResponse) => {
      console.log(response);
    }, error => {
      console.log(error)
    })
  }
}
