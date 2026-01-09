import { Component, computed } from '@angular/core';
import { Cart } from '../cart';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  
  constructor(private cs:Cart){}

  totalCount = computed(()=>this.cs.cartItem())
}
