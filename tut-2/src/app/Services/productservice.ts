import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiResponse } from '../Models/Product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Productservice {
  constructor(private http: HttpClient) { }

  apiUrl = "https://dummyjson.com/products";

  getProducts(): Observable<apiResponse> {
    return this.http.get<apiResponse>(this.apiUrl);
  }
}
