import { Injectable, signal } from '@angular/core';
import { Cart, CartApiResponse } from '../../models/cart.model';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Cartservice {

  constructor(private http: HttpClient) { }

  private cart_ = signal<Cart[]>([]);
  private loading_ = signal<boolean>(false);
  private error_ = signal<string | null>(null);


  cart = this.cart_.asReadonly();
  loading = this.loading_.asReadonly();
  error = this.error_.asReadonly();




  apiUrl = "https://dummyjson.com/carts";

  // :Observable<CartApiResponse>
  loadCarts() {
    this.loading_.set(true);
    this.http.get<CartApiResponse>(this.apiUrl)
      .pipe(
        map(
          (res: CartApiResponse) => res.carts.map((c: Cart): Cart => ({
            id: c.id,
            discountedTotal: c.discountedTotal,
            total: c.total,
            totalProducts: c.totalProducts,
            totalQuantity: c.totalQuantity,
            userId: c.userId
          }))
        ),

        tap((data)=>console.log(data))
      ).subscribe({
        next: (res: Cart[]) => {
          this.cart_.set(res);
        },
        error: (err) => {
          this.error_.set("something went wrong");
        },
        complete: () => {
          this.loading_.set(false);
        }
      })
  }

}
