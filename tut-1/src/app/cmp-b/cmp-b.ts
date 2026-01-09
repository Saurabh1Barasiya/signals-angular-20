import { Component, signal } from '@angular/core';

export interface User {
  name: string,
  age: number,
  address: string,
}

@Component({
  selector: 'app-cmp-b',
  imports: [],
  templateUrl: './cmp-b.html',
  styleUrl: './cmp-b.css',
})
export class CmpB {
  fruits = signal<string[]>([]);

  data = signal<User[]>([{
    name: "saurabh",
    address: "harrai",
    age: 25
  }])

  addNewFruit() {
    this.fruits.update(arr => ([...arr, "apple"]))
  }

  addNewUser(){
    const user:User = {
      address:"chhindwara",
      age:22,
      name:"jhon"
    }

    this.data.update(arr=>([...arr,user]))
  }

  updateSaurabh(){
    this.data.update(arr=>{
      return arr.map((u)=>u.name === "saurabh" ? {...u,name:"peeyush"} : u)
    })
  }

  removeSaurabh(){
    this.data.update(arr=>{
      return arr.filter((u)=>u.name !== "saurabh")
    })
  }

  updateSaurabhAge(){
    this.data.update((arr)=>{
      return arr.map((u)=>u.name === "saurabh"?{...u,age:28}:u)
    });
  } 

  suhani = signal({
    name:"suhani",
    surname:"kushwaha",
    age:20
  })

  updateSuhani(){
    this.suhani.update(prevSuhani=>({...prevSuhani,age:25,surname:prevSuhani.surname.toUpperCase()}))
  }
} 

