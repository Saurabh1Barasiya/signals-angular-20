import { Component, OnInit, signal ,inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Productservices } from './Services/productservices';
import { Product } from '../Models/product.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App{
  protected title = 'tut-3';

  private ps = inject(Productservices);
  
  allData = this.ps.products;
  
  
}
