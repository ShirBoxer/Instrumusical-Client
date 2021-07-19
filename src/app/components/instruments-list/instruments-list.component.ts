import { Component, Input, OnInit } from '@angular/core';
import { Instrument } from 'src/app/models/instrument';

@Component({
  selector: 'app-instruments-list',
  templateUrl: './instruments-list.component.html',
  styleUrls: ['./instruments-list.component.css']
})
export class InstrumentsListComponent implements OnInit {
 @Input() instruments : Instrument[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  fillList(instrumentsList : Instrument[]){
    this.instruments = instrumentsList;
    alert("fillList() in instrument-list component");
  }

}
