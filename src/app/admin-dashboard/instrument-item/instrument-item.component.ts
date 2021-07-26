import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Instrument } from 'src/app/models/instrument';


@Component({
  selector: 'app-instrument-item',
  templateUrl: './instrument-item.component.html',
  styleUrls: ['./instrument-item.component.css']
})
export class InstrumentItemComponent implements OnInit {
  @Input() instrument: Instrument|undefined;
  @Output() onInstrumentDel: EventEmitter<Instrument>;
  constructor() { 
    this.onInstrumentDel = new EventEmitter();
  }
  ngOnInit(): void {
  }

  deleteInstrument(){
    if(this.instrument)
      this.onInstrumentDel.emit(this.instrument);
  }

}
