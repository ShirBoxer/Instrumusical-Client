import { Component, Input, OnInit } from '@angular/core';
import { Instrument } from 'src/app/models/instrument';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';
import { InstrumentService } from 'src/app/services/instrument.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  instrumentsList: Instrument[] = [];
  @Input() categoryValue: string = '';
  @Input() brandValue: string = '';
  @Input() priceValue: string = '';

  categoriesList: string[] = ['','Guitars','Drums','Keys','DJGear','Accessories'];
  brandsList: string[] =  ['','Yamaha','Casio','Gibson',"Taylor","Roland","DW","Pearl"];
  pricesList: string[] =  ['','0$-600$','600$-1000$','1000$-2000$','2000$+'];
  
  constructor(private activeRoute: ActivatedRoute, private instrumentsService: InstrumentService) {}

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(params =>{
      this.instrumentsService.getSearchResult(params["searchTxt"])
        .subscribe(instruments => this.instrumentsList=instruments);
    });
    
    }

  searchFilter(): void{
    this.instrumentsService
    .getFilterResults([this.categoryValue,this.brandValue,this.priceValue])
    .subscribe(instruments =>{
      this.instrumentsList=instruments;
      console.log(instruments);
    } );
  }
  
  bestOffers(): void {
    this.instrumentsService.getBestOffers().subscribe(instruments => {
      this.instrumentsList = instruments;
      console.log(instruments);
    });
  }
  
  
} 


