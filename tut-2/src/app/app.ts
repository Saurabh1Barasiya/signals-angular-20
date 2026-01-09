import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Productservice } from './Services/productservice';
import { apiResponse, Product } from './Models/Product.model';
import { map, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SlicePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-2';

  productData = signal<Product[]>([]);
  loading = signal<boolean>(true);
  errorProduct = signal<string|null>(null);

  constructor(private ps:Productservice){}

  getData(){
    this.ps.getProducts()
    .pipe(
      // tap((res:apiResponse)=>{console.log(res.products)}),
      map((res:apiResponse)=>{
        return res.products.map((p):Product=>{
          return {
            category:p.category,
            description:p.description,
            discountPercentage:p.discountPercentage,
            id:p.id,
            price:p.price,
            rating:p.rating,
            stock:p.stock,
            title:p.title
          }
        })
      })
    )
    .subscribe({
      next:(res)=>{
        console.log(res)
        this.productData.set(res);
        this.loading.set(false);
        this.errorProduct.set(null);
      },
      error:(er)=>{
        this.errorProduct.set(er.message);
      },
      complete:()=>{

      }
    })
  }
}
