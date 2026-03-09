import { NgStyle } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgStyle],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-7';

  price = signal<number>(100);
  quentity = signal<number>(1);

  totel = computed(()=>{
    return this.price() * this.quentity();
  })

  incPrice(){
    this.price.update(prev => prev + 100);
  }

  incQuentity(){
    this.quentity.update(prev => prev + 1);
  }


  // 1. tell me about project . project detailing. 
  // project module.
  // spring ceremany.
  // dsm.

  // 2.major chalenges in project

  // mentor ship junior.

  // rate yourself out of 10. 

  // production related issue .

  // aligle process.

  // 5
}
