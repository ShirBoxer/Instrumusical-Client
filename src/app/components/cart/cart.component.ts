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

  constructor(private cartService: CartService) { 
    this.instruments = cartService.getItems(); 
  }

  ngOnInit(): void {
  }

}
