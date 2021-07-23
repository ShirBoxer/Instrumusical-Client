import { Component, Input, OnInit } from '@angular/core';
import { Instrument } from 'src/app/models/instrument';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';
import { InstrumentService } from 'src/app/services/instrument.service';
import { environment } from '../../../environments/environment';

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
    if(this.route.url.startsWith('/instruments'))
      this.categoryRoute(this.route.url.substring(13));
    else if(this.route.url.startsWith('/brands'))
      this.brandsRoute(this.route.url.substring(8));

  }

  categoryRoute(token: string): void{
    // save the route for matching the right service  
    this.instrumentService.getSpecificInstrument(token)
    .subscribe(data => this.instruments=data);  }

  brandsRoute(token: string): void {
    this.instrumentService.getSpecificBrand(token)
    .subscribe(data => this.instruments=data);
  }

  



}
