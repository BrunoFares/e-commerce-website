import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ListItemsService } from '../service/list-items.service';
import { ListItems } from '../model/list-items.model';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.scss'
})
export class ListItemsComponent implements OnInit {
  items!: ListItems[];

  constructor(private http: HttpClient, private listItems: ListItemsService) {}

  ngOnInit() {
    this.listItems.getProducts().subscribe((response: ListItems[]) => {
      this.items = response;
    })
  }
}
