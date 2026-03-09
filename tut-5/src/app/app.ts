import { NgStyle } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArrayPractice } from "./array-practice/array-practice";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgStyle, ArrayPractice],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-5';

  // creating a signal 
  count = signal(0);

  inc(){
    this.count.update(previousCount=>previousCount+1);
  }

  dec(){
    if(this.count() <= 0){
      alert("count state is already 0");
      return;
    }

    this.count.update(previousCount=>previousCount-1);
  }

  reset(){
    this.count.set(0);
  }


  numIteams = signal<number[]>([0]);
  num:number=0;
  addNumber(){
    this.num += 1;
    this.numIteams.update(arr=>[...arr,this.num]);
  }

  deleteNumber(){

    if(this.numIteams().length === 0){
      this.num = 0; 
    }

    this.numIteams.update((arr)=>{
      let newArray = [...arr];
      newArray.pop();
      return newArray;
    })
  }

}
