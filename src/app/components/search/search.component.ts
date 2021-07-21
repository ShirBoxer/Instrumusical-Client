import { Component, OnInit } from '@angular/core';
import { Instrument } from 'src/app/models/instrument';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';
import { InstrumentService } from 'src/app/services/instrument.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  instrumentsList: Instrument[] = [];
  searchTxt = "";
  constructor(private activeRoute: ActivatedRoute, private instrumentsService: InstrumentService) {
    activeRoute.queryParams.subscribe(params =>{
      this.instrumentsService.getSearchResult(params["search"])});
   }

  ngOnInit(): void {
  }

}
