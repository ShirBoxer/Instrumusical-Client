import { Injectable } from '@angular/core';
import { Instrument } from '../models/instrument';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: Instrument[] = [];

  constructor() { }

  addToCart(instrument: Instrument){
    this.cartItems.push(instrument);
  }

  getItems(){
    return this.cartItems;
  }

  clearCart(){
    this.cartItems = [];
    return this.cartItems;
  }
}
