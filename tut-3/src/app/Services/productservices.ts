import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ApiResponse, Product } from '../../Models/product.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Productservices {
  apiUrl = "https://dummyjson.com/products";
  // constructor(private http:HttpClient){}

  private http = inject(HttpClient)

  products = toSignal(
    this.http.get<ApiResponse>(this.apiUrl).pipe(
      map((res) => res.products.map((p: Product): Product => {
        return {
          id: p.id,
          price: p.price,
          stock: p.stock,
          title: p.title
        }
      }))
    ),

    {initialValue:[] as Product[]} // loading ke time empty array
  )
}
