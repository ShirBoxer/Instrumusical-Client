import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { InstrumentService } from 'src/app/services/instrument.service';
import { Instrument } from '../../models/instrument'
@Component({
  selector: 'app-main-toolbar',
  templateUrl: './main-toolbar.component.html',
  styleUrls: ['./main-toolbar.component.css']
})
export class MainToolbarComponent implements OnInit {
  @Output() onServerResponse = new EventEmitter();
  constructor(private instrumentService: InstrumentService) { }

  ngOnInit(): void {
  }

  getAllGuitars(){
    console.log("getAllGuitars()");
    this.instrumentService.getAllGuitars().subscribe((data)=>{
      this.onServerResponse.emit(data);
    });
    
  }
  getAllDrums(){
    console.log("getAllDrums()");
  }
  getAllKeys(){
    console.log("getAllKeys()");
  } 
  getAllDJGear(){
  console.log("getAllDJGear()");
  }
  getAllAccessories(){
    console.log("getAllAccessor()");

  }
}
