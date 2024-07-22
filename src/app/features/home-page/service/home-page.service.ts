import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { GetProductResponse } from '../models/get-product-response.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {
  fakeApi = environment.fakeStoreApi;

  constructor(private http: HttpClient) { }

  getProduct(): Observable<GetProductResponse> {
    return this.http.get<GetProductResponse>(`${this.fakeApi}/products?limit=3`);
  }
}
