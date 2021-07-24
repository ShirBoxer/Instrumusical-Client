import { Component, OnInit } from '@angular/core';
import { Instrument } from 'src/app/models/instrument';
import { CartService } from 'src/app/services/cart.service';
import { OrderService} from 'src/app/services/order.service';
import {Order} from 'src/app/models/order';
//MOVE
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class CartComponent implements OnInit {
  
  instruments: Instrument[] = [];
  quantities: number[] = [];
  totalPrice: number = 0;

  //view 
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  phoneFormGroup!: FormGroup;

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private userService: UserService,
    private _formBuilder: FormBuilder) { 
    this.instruments = this.cartService.getItems(); 
    this.quantities = this.cartService.getCounter();
    this.totalPrice = this.cartService.getTotalPrice();
  }
  ngOnChanges(): void {  ///TODO change all!!
    this.instruments = this.cartService.getItems(); 
    this.quantities = this.cartService.getCounter();
    this.totalPrice = this.cartService.getTotalPrice();

  }
  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.phoneFormGroup = this._formBuilder.group({
      phoneCtrl: ['', Validators.required]
    });


  }

  newOrder(): void {
    let user = this.userService.getUserDetails()!._id;
    let supplyTime = new Date();
    supplyTime.setDate(supplyTime.getDate() + 7);

    let params = {
      owner: user,
      orderDate: new Date(),
      supplyDate: supplyTime,
      address: this.secondFormGroup.getRawValue().secondCtrl,
      phoneNum: this.phoneFormGroup.getRawValue().phoneCtrl,
      totalPrice: this.totalPrice,
      products: this.instruments
    }
    
    this.orderService.addOrder(params)
      .subscribe((o : Order) => {
        //the new order 
        alert(`Yay!! your order has been submitted, The estimated time of arrival time: ${o.supplyDate}`);
    });
    //console.log(this.firstFormGroup.getRawValue().firstCtrl);
    //console.log(this.phoneFormGroup.getRawValue().phoneCtrl);


  }


  removeFromCart(item: Instrument){
    let isEqual = (item: Instrument)=>{
      return item._id == item._id;
    };
    let index = this.instruments.findIndex(isEqual);
    this.cartService.removeAllFromCart(item);
    this.instruments = this.cartService.getItems();
    this.quantities = this.cartService.getCounter();
    this.totalPrice = this.cartService.getTotalPrice();
  }
  
  addOne(item: Instrument){
    this.cartService.addToCart(item);
    this.instruments = this.cartService.getItems(); 
    this.quantities = this.cartService.getCounter();
    this.totalPrice = this.cartService.getTotalPrice();
  }
  decreaseOne(item: Instrument){
    this.cartService.removeFromCart(item);
    this.instruments = this.cartService.getItems(); 
    this.quantities = this.cartService.getCounter();
    this.totalPrice = this.cartService.getTotalPrice();
  }


}
