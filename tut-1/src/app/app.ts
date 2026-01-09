import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompA } from "./comp-a/comp-a";
import { Navbar } from "./navbar/navbar";
import { CmpB } from "./cmp-b/cmp-b";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CompA, Navbar, CmpB],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-1';
  protected count = signal(0);

  constructor(){
    effect(()=>{
      console.log("price chnaged",this.price());
    })
  }

  inc(){
    this.count.update(previousValue=>previousValue+1);
  }

  dec(){
    this.count.update((previousValue)=>{
      return previousValue-1;
    })
  }

  reset(){
    this.count.set(0);
  }


  protected price = signal(500);
  protected quentity = signal(1)


  totel = computed(()=>{
    return this.price()*this.quentity();
  })

  incQuantity(){
    this.quentity.update(previousQuantity=>previousQuantity+1)
  }

  decQuantity(){
    this.quentity.update(previousQuantity=>previousQuantity-1);
  }

  priceUpdate(){
    this.price.update(previousPrice=>previousPrice+100)
  }
}
