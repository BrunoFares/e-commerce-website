import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CategoriesListingService } from './services/categories-listing.service';
import { CategoriesListing } from './model/categories-listing.model';

@Component({
  selector: 'app-categories-listing',
  templateUrl: './categories-listing.component.html',
  styleUrl: './categories-listing.component.scss'
})
export class CategoriesListingComponent implements OnInit {
  @Output() display = new EventEmitter<boolean>();
  categories: CategoriesListing = []

  constructor(private categoriesListing: CategoriesListingService) {}

  ngOnInit(): void {
    this.categoriesListing.getCategories().subscribe((response: CategoriesListing) => {
      this.categories = response;
    })
  }

  hovering() {
    this.display.emit(true);
  }
}
