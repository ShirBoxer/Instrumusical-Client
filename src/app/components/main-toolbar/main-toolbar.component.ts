import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/models/user';

import { CartService } from 'src/app/services/cart.service';
import { InstrumentService } from 'src/app/services/instrument.service';
import { TokenPayload, UserService } from 'src/app/services/user.service';
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

  isAdmin = false;
  logged = false;
  currentUser: User| undefined;

   
  constructor(private instrumentService: InstrumentService,
              private usersService: UserService,
              public dialog: MatDialog) {

              }

  ngOnInit(): void {
  }

  showUsers(){
    alert("TODO: complete this function with routing navigation.");

  }

  connect(_action:string){

    // -- DIALOG--

    // predefine dialog configurations
    const dialogConfig = {data:{action:_action}};  
    // create a reference to the dialog and open
    let dialogRef = this.dialog.open(DialogComponent, dialogConfig);
    // set after closed callback
    dialogRef.afterClosed().subscribe(_data => {
      if(_data === 'cancel') return; 
      // credentials verification
      const email: string = _data.email;
      const pw: string = _data.password;
      if (!(email && pw)) {
        alert("must specify credentials!"); // no credentials TODO: make snackbar
        return; 
      }
      var newUser: TokenPayload = {
          email: email,
          password: pw,
          name: 'a' // todo: get from dialog
        }
      if (_data.action === 'reg') { // on registration
        const pwConfirm = _data.passwordConfirm;
        if(pw !== pwConfirm) { // math pw and confirm pw
          alert("The two passwords don't match.");// TODO: make snackbar
          return;
        }
        
        

        // register
        this.usersService.register(newUser).subscribe(_response =>{
          if (!_response.success){
            alert(`Somthing went wrong: ${_response.errors[0]}`);
            return;
          }
        });
      } 
      
      // on login
      else if (_data.action === 'log') {
        this.usersService.login().subscribe(_result => {
          // alert(`result: ${_result.success}`)
          if (_result.success) {
            this.logged = true;
            this.currentUser = _result.data[0];
            this.isAdmin = _result.data[0].isAdmin;
            if(this.currentUser!= undefined) {
              this.usersService.setCurrentUser(this.currentUser);
            }
            const auser = this.usersService.getCurrentUser();
            if(auser!=null){
              alert(`current user set: ${auser.connected},${auser.email},${auser.password},${auser._id},${auser.isAdmin},`);
            }
          }
        });
      }
      
    });
    
  }

  logout(){
    const user = this.usersService.logout();
    // const user = this.usersService.getCurrentUser();
    // if(!user) return alert('Somthing is wrong! No current user to log out.');
    // this.usersService.logUser(false, user.email, "").subscribe(_result =>{
    //   if (!_result) return alert('Mal packet result.');
    //   if (!_result.success) return alert(_result.errors[0]);
    //   this.logged = false;
    //   this.isAdmin = false;
    //   this.usersService.setLogged(false);
    // });
  }

  goToCart(){
    this.cartNavigation.emit();
  }

  onSearchClick(){
     alert('todo: route to search view');
  }

  alert(msg:string){
    alert(msg);
  }
  greet(){
    if (this.logged && this.currentUser){
      let email = this.currentUser.email;
      let res = "";
      for (let i=0; i< email.length; i++){
        let c = email.charAt(i);
        if (c=='@') break;
        res += c; 
      }
      return "Hi, " + res;
    }
    return "No logged user!";
  }
}
