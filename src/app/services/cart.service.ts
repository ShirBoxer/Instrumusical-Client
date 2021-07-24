import { Injectable } from '@angular/core';
import { Instrument } from '../models/instrument';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  cartItems: Instrument[] = [];
  cartCounter: number[] = [];
  totalPrice: number = 0;
  constructor() { }

  addToCart(instrument: Instrument){
    let isEqual = (item: Instrument)=>{
      return item._id == instrument._id;
    };
    let index = this.cartItems.findIndex(isEqual);
    if(index == -1){
      this.cartItems.push(instrument);
      this.cartCounter.push(1);
    }else{
      this.cartCounter[index] += 1;
    }
    this.totalPrice += instrument.price;
  }

  removeFromCart(instrument: Instrument){
    let isEqual = (item: Instrument)=>{
      return item._id == instrument._id;
    };   
    let index = this.cartItems.findIndex(isEqual);
    this.totalPrice -= instrument.price;

    if(index != -1 && this.cartCounter[index] > 1){
      this.cartCounter[index] -= 1;
    }
    else if(index != -1 && this.cartCounter[index] == 1){
      //remove one item from index 'index'
      this.cartItems.splice(index, 1);
      this.cartCounter.splice(index,1);
    }else{
      alert("Instrument Dose not exist!");
      return;
    }
  }

  removeAllFromCart(instrument: Instrument){
    let isEqual = (item: Instrument)=>{
      return item._id == instrument._id;
    };
    let index = this.cartItems.findIndex(isEqual);
    if(index != -1){
      this.totalPrice -= (this.cartCounter[index]*instrument.price);
      //remove item from index 'index'
      this.cartItems.splice(index, 1);
      this.cartCounter.splice(index,1);
      console.log(this.totalPrice);
    }
  }

  getItems(){
    return this.cartItems;
  }

  getCounter(){
    return this.cartCounter;
  }

  getTotalPrice(): number {
    return this.totalPrice;
     }

  clearCart(){
    this.cartItems = [];
    this.cartCounter = [];
  }
}
