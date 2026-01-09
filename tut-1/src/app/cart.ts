import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Cart {
  cartItem = signal(0);

  addToCart(){
    console.log("i am working")
    this.cartItem.update(previousValue=>previousValue+1);
  }
}
