import { Component, OnInit } from '@angular/core';
import { ObjectUnsubscribedError } from 'rxjs';
import { Instrument } from 'src/app/models/instrument';
import { InstrumentService } from 'src/app/services/instrument.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-main-grid',
  templateUrl: './main-grid.component.html',
  styleUrls: ['./main-grid.component.css']
})
export class MainGridComponent implements OnInit {
  topSellersInstruments: Instrument[] = [];
  constructor(private instrumentService: InstrumentService,
              private carousel: NgbCarouselConfig ) {
    this.instrumentService.getTopSellers().subscribe(instruments =>{
      this.topSellersInstruments=instruments;
      this.customInit();
    } );
    }

  ngOnInit(): void {
  
  }

  customInit(){
      this.carousel.interval = 500;
      this.carousel.wrap = true;
      this.carousel.keyboard = false;
      this.carousel.pauseOnHover = true;
  }

}
