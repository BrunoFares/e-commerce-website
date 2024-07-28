import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { ListItems } from '../model/list-items.model';

@Injectable({
  providedIn: 'root'
})
export class ListItemsService {
  fakeApi = environment.fakeStoreApi;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ListItems[]> {
    return this.http.get<ListItems[]>(`${this.fakeApi}/products`);
  }
}
