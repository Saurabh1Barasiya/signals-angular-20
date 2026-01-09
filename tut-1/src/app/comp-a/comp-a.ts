import { Component } from '@angular/core';
import { Cart } from '../cart';

@Component({
  selector: 'app-comp-a',
  imports: [],
  templateUrl: './comp-a.html',
  styleUrl: './comp-a.css',
})
export class CompA {
  constructor(private cs:Cart){}

  addItems(){
    this.cs.addToCart();
  }
}
