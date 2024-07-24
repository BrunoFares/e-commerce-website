import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CategoriesListing } from '../model/categories-listing.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesListingService {
  private fakeApi = environment.fakeStoreApi;

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get<CategoriesListing>(`${this.fakeApi}/products/categories`);
  }
}
