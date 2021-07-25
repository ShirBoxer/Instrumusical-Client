import { Component, Input, OnInit } from '@angular/core';
import { Instrument } from 'src/app/models/instrument';

@Component({
  selector: 'app-instrument-item',
  templateUrl: './instrument-item.component.html',
  styleUrls: ['./instrument-item.component.css']
})
export class InstrumentItemComponent implements OnInit {
  @Input() instrument: Instrument|undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
