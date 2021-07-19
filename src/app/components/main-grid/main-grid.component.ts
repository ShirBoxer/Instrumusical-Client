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
    this.instrumentService.getAllGuitars().subscribe((instrumentsList) => {
      console.log("got instruments");
      this.topSellersInstruments = instrumentsList.sort((instLeft, instRight) =>{
        return instLeft.sold > instRight.sold ? 1 : -1;
      }).slice(0,4);
    });
   }

  ngOnInit(): void {
  
  }

}
