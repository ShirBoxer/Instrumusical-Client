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

  register(){
    //const dialogConfig = {width: "30%", height:"300px"}  
    const dialogConfig = {};  
      let dialogRef = this.dialog.open(DialogComponent, dialogConfig);
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    
  }

  goToCart(){
    this.cartNavigation.emit();
  }
}
