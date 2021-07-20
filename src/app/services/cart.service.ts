import { Injectable } from '@angular/core';
import { Instrument } from '../models/instrument';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: Instrument[] = [];

  constructor() { }

  
}
