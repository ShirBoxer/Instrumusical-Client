import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

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
  
  constructor(private instrumentService: InstrumentService,
              public dialog: MatDialog) {
    
   }

  ngOnInit(): void {
  }
  //TODO: generic function for all categories.
  getAllGuitars(){
    console.log("getAllGuitars()");
    this.instrumentService.getAllGuitars().subscribe((data)=>{
      this.instruemntsListResponse.emit(data);
    });
    
  }

  logIn(){

  }

  connect(_action:string){
    //const dialogConfig = {width: "30%", height:"300px"} 
    // alert(`chosen action: ${action}`)
    const dialogConfig = {data:{action:_action}};  
    let dialogRef = this.dialog.open(DialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(_data => {
      if(_data!='cancel'){
        
      }
    });
    
  }

  goToCart(){
    this.cartNavigation.emit();
  }
}
