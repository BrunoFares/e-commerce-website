import { Component, OnInit } from '@angular/core';
import { HomePageService } from '../service/home-page.service';
import { GetProductResponse } from '../models/get-product-response.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  items: GetProductResponse = [];

  constructor(private homePageService: HomePageService) {}

  ngOnInit() {
    this.homePageService.getProduct().subscribe((response: any) => {
      this.items = response;
    });
  }
}
