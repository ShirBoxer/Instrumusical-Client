import { Component, Input, OnInit } from '@angular/core';
import { Instrument } from 'src/app/models/instrument';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';
import { InstrumentService } from 'src/app/services/instrument.service';

@Component({
  selector: 'app-instruments-list',
  templateUrl: './instruments-list.component.html',
  styleUrls: ['./instruments-list.component.css']
})
export class InstrumentsListComponent implements OnInit {

  instruments : Instrument[] = [];

  constructor(private route: Router, private instrumentService: InstrumentService) {
   }

  ngOnInit(): void {
    // save the route for matching the right service  
    this.instrumentService.getSpecificInstrument(this.route.url.substring(13))
    .subscribe(data => this.instruments=data);
    console.log(`on init ${this.instruments.length}`);
  }
  



}
