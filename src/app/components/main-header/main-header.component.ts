import { Component, OnInit } from '@angular/core';
import { ScrapeInstrument } from 'src/app/models/scrape-instrument';
import { InstrumentService } from '../../services/instrument.service'
@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {
  link: string = '';
  name: string = '';
  sentence: ScrapeInstrument | undefined;
  
  constructor(private instrumentsService : InstrumentService) {
   }

  ngOnInit(): void {
    this.update();
  }

  update(){
    this.instrumentsService.getRandomSetence().subscribe((sentence)=>{
      if(!sentence || !sentence[0]) return;
      this.link = "https://en.wikipedia.org" +  sentence[0].link;
      this.name = sentence[0].name;
    });
  }

}
