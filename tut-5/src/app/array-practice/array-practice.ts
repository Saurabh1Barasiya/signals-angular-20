import { NgStyle } from '@angular/common';
import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-array-practice',
  imports: [NgStyle,FormsModule],
  templateUrl: './array-practice.html',
  styleUrl: './array-practice.css',
})
export class ArrayPractice {
  importentPart = signal<string[]>(["keyboard","mouse"]);
  // @ViewChild('inputVal') inputVal!:ElementRef;

  inputVal:string="";

  addItems(){
    // console.log((this.inputVal.nativeElement as HTMLInputElement).value);
    // let inputValue = (this.inputVal.nativeElement as HTMLInputElement).value;
    this.importentPart.update(arr=>[...arr,this.inputVal]);
    this.inputVal = '';
  }

  deleteItems(index:number){
    console.log("current index is ",index)
    this.importentPart.update(currentImportentPart=>currentImportentPart.filter((_,i)=> i !== index));
  }

  replaceAllItems(){
    this.importentPart.set(["papaya","orange","mango"]);
  }


  updateItems(index:number){
    console.log("current index",index);

    this.importentPart.update(arr=>arr.map((curr,i)=> i === index ? "updated":curr));
  }

}
