import { Component, OnInit } from '@angular/core';
import { Instrument } from 'src/app/models/instrument';

@Component({
  selector: 'app-instruments-list',
  templateUrl: './instruments-list.component.html',
  styleUrls: ['./instruments-list.component.css']
})
export class InstrumentsListComponent implements OnInit {
  instruments: Instrument[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  addToCart(id: any){
    alert(`addToCart -> ${id}`);
  }

  like(id: any){
    alert(`like -> ${id}`);
  }
}
