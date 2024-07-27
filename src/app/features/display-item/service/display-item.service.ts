import { Injectable } from '@angular/core';
import { DisplayItem } from '../model/display-item.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisplayItemService {
  fakeApi = environment.fakeStoreApi;

  constructor(private http: HttpClient) { }

  getProduct(id: number): Observable<DisplayItem> {
    return this.http.get<DisplayItem>(`${this.fakeApi}/products/${id}`);
  }
}
