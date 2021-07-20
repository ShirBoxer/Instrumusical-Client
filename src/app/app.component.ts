import { Component } from '@angular/core';
import { Instrument } from './models/instrument';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { User } from './models/user';

enum status {
  main = 0,
  instrumentList = 1,
  cart = 2
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Data members
  title = 'client';
  currentStatus = status.main;
  instruments: Instrument[] = [];
  

  constructor(private http: HttpClient){
      
  }
  

  login(){
    
    
  }

  submit(){
    
  }

  signInstruments(instruments: Instrument[]){
    this.instruments = instruments;
    this.currentStatus = status.instrumentList;
  }

  cartNav(){
    this.currentStatus = status.cart;
  }
}
