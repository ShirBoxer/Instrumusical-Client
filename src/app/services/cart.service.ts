import { Injectable } from '@angular/core';
import { Instrument } from '../models/instrument';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: Instrument[] = [];
  cartCounter: number[] = [];
  constructor() { }

  addToCart(instrument: Instrument){
    let isEqual = (item: Instrument)=>{
      return item.name == instrument.name;
    };
    let index = this.cartItems.findIndex(isEqual);
    if(index == -1){
      this.cartItems.push(instrument);
      this.cartCounter.push(1);
    }else{
      this.cartCounter[index] += 1;
    }
  }

  removeFromCart(instrument: Instrument){
    let isEqual = (item: Instrument)=>{
      return item.name == instrument.name;
    };   
    let index = this.cartItems.findIndex(isEqual);

    if(index != -1 && this.cartCounter[index] > 1){
      this.cartCounter[index] -= 1;
    }
    else if(index != -1 && this.cartCounter[index] == 1){
      //remove one item from index 'index'
      this.cartItems.splice(index, 1);
      this.cartCounter.splice(index,1);
    }else{
      alert("Instrument Dose not exist!");
    }
  }

  removeAllFromCart(instrument: Instrument){
    let isEqual = (item: Instrument)=>{
      return item.name == instrument.name;
    };
    let index = this.cartItems.findIndex(isEqual);
    if(index != -1){
      //remove item from index 'index'
      this.cartItems.splice(index, 1);
      this.cartCounter.splice(index,1);
    }
  }

  getItems(){
    return this.cartItems;
  }

  getCounter(){
    return this.cartCounter;
  }

  clearCart(){
    this.cartItems = [];
    this.cartCounter = [];
  }
}
