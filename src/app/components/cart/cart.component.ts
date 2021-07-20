import { Component, OnInit } from '@angular/core';
import { Instrument } from 'src/app/models/instrument';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  instruments: Instrument[] = [];
  quantities: number[] = [];

  constructor(private cartService: CartService) { 
    this.instruments = cartService.getItems(); 
    this.quantities = cartService.getCounter();
  }

  ngOnInit(): void {
  }

  removeFromCart(item: Instrument){
    this.cartService.removeAllFromCart(item);
  }
  
  addOne(item: Instrument){
    this.cartService.addToCart(item);
  }
  decreaseOne(item: Instrument){
    this.cartService.removeFromCart(item);
  }
}
