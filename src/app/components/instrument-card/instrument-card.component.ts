import { Component, Input, OnInit } from '@angular/core';
import { Instrument } from 'src/app/models/instrument';

@Component({
  selector: 'app-instrument-card',
  templateUrl: './instrument-card.component.html',
  styleUrls: ['./instrument-card.component.css']
})
export class InstrumentCardComponent implements OnInit {

  @Input()  instrument: Instrument | undefined;


  constructor() { 
  }

  ngOnInit(): void {
  

}

}
