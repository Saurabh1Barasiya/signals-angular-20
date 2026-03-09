import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cartservice } from './Service/cartservice';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-4';

  // constructor(private cs:Cartservice){}
  private cartservice = inject(Cartservice)

  cart = this.cartservice.cart;
  error = this.cartservice.error;
  loading = this.cartservice.loading;

  getData(){
    this.cartservice.loadCarts();
  }
}
