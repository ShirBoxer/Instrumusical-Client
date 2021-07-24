import { Component, Input, OnInit } from '@angular/core';
import { Instrument } from 'src/app/models/instrument';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-instrument-card',
  templateUrl: './instrument-card.component.html',
  styleUrls: ['./instrument-card.component.css']
})
export class InstrumentCardComponent implements OnInit {

  @Input()  instrument: Instrument | undefined;


  constructor(private cartService: CartService) { 
  }

  ngOnInit(): void {}

  addToCart(item: Instrument){
    this.cartService.addToCart(item);
    window.alert('Your product has been added to the cart!');
    //console.log(`Item ${item.name} was added to the cart`);

  }

}
