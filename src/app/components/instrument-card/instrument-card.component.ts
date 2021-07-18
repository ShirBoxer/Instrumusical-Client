import { Component, Input, OnInit } from '@angular/core';
import { Instrument } from 'src/app/models/instrument';

@Component({
  selector: 'app-instrument-card',
  templateUrl: './instrument-card.component.html',
  styleUrls: ['./instrument-card.component.css']
})
export class InstrumentCardComponent implements OnInit {

  @Input() instrument: Instrument ={
    _id: 1,
  name: "A",
  brand: "A",
  category: "A",
  title: "A",
  imgPath: "A",
  description: "A",
  reviews: ["A","A","A"],
  quantity: 1,
  price: 1
  };


  constructor() { }

  ngOnInit(): void {
  

}

}
