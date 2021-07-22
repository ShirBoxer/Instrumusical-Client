import { Component, OnInit } from '@angular/core';
import { ObjectUnsubscribedError } from 'rxjs';
import { Instrument } from 'src/app/models/instrument';
import { InstrumentService } from 'src/app/services/instrument.service';
@Component({
  selector: 'app-main-grid',
  templateUrl: './main-grid.component.html',
  styleUrls: ['./main-grid.component.css']
})
export class MainGridComponent implements OnInit {

  topSellersInstruments: Instrument[] = [];

  constructor(private instrumentService: InstrumentService ) {
    this.instrumentService.getTopSellers().subscribe(instruments => this.topSellersInstruments=instruments);
    }

  ngOnInit(): void {
  
  }

}
