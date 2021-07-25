import { Component, OnInit } from '@angular/core';
import { Instrument } from 'src/app/models/instrument';
import { CartService } from 'src/app/services/cart.service';
import { OrderService} from 'src/app/services/order.service';
import {Order} from 'src/app/models/order';
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
  inOrder: boolean = false;

  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  phoneFormGroup!: FormGroup;

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private userService: UserService,
    private _formBuilder: FormBuilder) { 
    this.updateData();
  }

  ngOnChanges(): void {  
    this.updateData();

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

  toOrder(): void {   this.inOrder = true; }
 
  updateData(): void{
    this.instruments = this.cartService.getItems();
    this.quantities = this.cartService.getCounter();
    this.totalPrice = this.cartService.getTotalPrice();
  }

  removeFromCart(item: Instrument){
    let isEqual = (item: Instrument)=>{
      return item._id == item._id;
    };
    let index = this.instruments.findIndex(isEqual);
    this.cartService.removeAllFromCart(item);
    this.updateData();
  }
  
  addOne(item: Instrument){
    this.cartService.addToCart(item);
    this.updateData();
  }
  decreaseOne(item: Instrument){
    this.cartService.removeFromCart(item);
    this.updateData();
  }

 ///    Order   ///
  newOrder(): void {
    let user = this.userService.getUserDetails()!._id;
    let supplyTime = new Date();
    supplyTime.setDate(supplyTime.getDate() + 7);

    let params = {
      numOfProducts: this.quantities,
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
        this.inOrder = false;
        this.instruments = [];
        this.quantities = []
        // cleaning the cart
        this.cartService.clearCart();
        this.updateData();    
        alert(`Yay!! your order has been submitted, The estimated time of arrival time: ${o.supplyDate}`);
    });

   

    
  }

}
