import { Component } from '@angular/core';
import { Instrument } from './models/instrument';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { User } from './models/user';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Data members
  title = 'client';
  instruments: Instrument[] = [];
  

  constructor(private http: HttpClient){
  }
 
}
