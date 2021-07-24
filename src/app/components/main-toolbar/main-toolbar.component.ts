import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/models/user';
import { UserService, TokenPayload } from 'src/app/services/user.service';

import { CartService } from 'src/app/services/cart.service';
import { InstrumentService } from 'src/app/services/instrument.service';
import { Instrument } from '../../models/instrument'
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-main-toolbar',
  templateUrl: './main-toolbar.component.html',
  styleUrls: ['./main-toolbar.component.css']
})
export class MainToolbarComponent implements OnInit {

  @Output() instruemntsListResponse = new EventEmitter();
  @Output() cartNavigation = new EventEmitter();
  @Input() search: string = "";

  auth: UserService;
  
  
  constructor(private instrumentService: InstrumentService,
    private authService: UserService,
    public dialog: MatDialog) {
      this.auth = authService;

  }

  ngOnInit(): void {
  }


  connect(_action: string) {
    // predefine dialog configurations
    const dialogConfig = { data: { action: _action } };
    // create a reference to the dialog and open
    let dialogRef = this.dialog.open(DialogComponent, dialogConfig);
    // set after closed callback
    dialogRef.afterClosed().subscribe(_data => {
      
      if (_data === 'cancel') return;
      
      const email: string = _data.email;
      const pw: string = _data.password;
      const pwConfirm: string = _data.passwordConfirm;
      const name: string = _data.name;
      if ( !(email && pw ) ) return alert("must specify credentials!"); 

      var aUser: TokenPayload = {
        email: email,
        password: pw,
        name: (name ? name : '')
      }

      if (_data.action === 'reg') {
        if (pw !== pwConfirm) 
          return alert("The two passwords must match!");
        this.register(aUser);        
      } else if (_data.action === 'log') 
          this.login(aUser); 
    });
  }

  private register(_user: TokenPayload){
    this.auth.register(_user).subscribe( () => {
      alert(`Hi, ${_user.name}!\nWelcome to the crew!!!`)
    },(_err) => {
      console.log(_err);
      alert('Email already in use!\nPlease try again!');
    });
  }

  private login(_user: TokenPayload){
    this.auth.login(_user).subscribe(_result => {
      if (_result.success) {
        alert(`Welcome back, ${this.auth.getUserDetails()?.name}`);
      }
    });
  }

  logout() {
    this.auth.logout();
  }
  
  goToCart(){
    this.cartNavigation.emit();
  }

  greet() {
    const GREET = "Hi";
    var addition = "";
    var user = this.auth.getUserDetails();
    if(user!=null)
      addition = `, ${user.name}`;
      return `${GREET}${addition}!`
  }
}
