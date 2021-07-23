import { Component, Inject, OnInit } from '@angular/core';
// import { MatDialogRef } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData{
  action:string,
  email:string,
  password:string,
  passwordConfirm:string,
  name:string
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  dialogData:DialogData;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.dialogData = data;
  }
  
  ngOnInit(): void {
  }

  swapAction(_action:string){
    this.dialogData.action = _action;    
  }
}
