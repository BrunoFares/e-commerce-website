import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { NewItemRequest } from '../models/new-item-request.model';
import { NewItemResponse } from '../models/new-item-response.model';

@Injectable({
  providedIn: 'root'
})
export class NewItemService {
  fakeApi = environment.fakeStoreApi;

  constructor(private http: HttpClient) { }

  createNewItem(request: NewItemRequest) {
    return this.http.post<NewItemResponse>(`${this.fakeApi}/products`, request)
  }
}
