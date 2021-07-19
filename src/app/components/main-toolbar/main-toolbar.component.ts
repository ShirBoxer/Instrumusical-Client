import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
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
      const dialogRef = this.dialog.open(DialogComponent,{
        width: "200px", height:"400px"});
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    
  }
}
