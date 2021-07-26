import { Component, Input, OnInit } from '@angular/core';
import { Instrument } from 'src/app/models/instrument';
import { InstrumentService } from 'src/app/services/instrument.service';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-instrument-item',
  templateUrl: './instrument-item.component.html',
  styleUrls: ['./instrument-item.component.css']
})
export class InstrumentItemComponent implements OnInit {
  @Input() instrument!: Instrument;
  constructor(private instrumentService:InstrumentService ) { 
    
  }

  ngOnInit(): void {
  }


  deleteInstrument(){
    this.instrumentService.deleteInstrument(this.instrument._id);
    
  }
  

}
