import { NgStyle } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface Userdetails{
  name?: string,
  age?: number,
  city?: string,
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgStyle],
  templateUrl: './app.html',
  styleUrl: './app.css'
})



export class App {
  protected title = 'tut-6';

  user = signal<Userdetails>({
    name: "Saurabh",
    age: 29,
    city: "Harrai"
  })

  updateName() {
    this.user.update(preObj => ({ ...preObj, name: 'Saurabh Barasiya' }));
  }

  updateAge() {
    this.user.update(preObj => ({ ...preObj, age: 30 }));
  }

  updateCity() {
    this.user.update(preObj => ({ ...preObj, city: "Harrai Chhindwara" }));
  }

  setInitial() {
    this.user.set({
      name: "Saurabh",
      age: 29,
      city: "Harrai"
    })
  }


  deleteName(){
    this.user.update((preObj) => {
      const {name,...remaning} = preObj;
      return remaning;
    })
  } 

  deleteAge(){
    this.user.update((preObj)=>{
      const {age,...remaning} = preObj;
      return remaning;
    })
  }

  deleteCity(){
     this.user.update((preObj)=>{
      const {city,...remaning} = preObj;
      return remaning;
    })
  }


}
