import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Instrument } from 'src/app/models/instrument';
import { InstrumentService } from 'src/app/services/instrument.service';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-instrument-list',
  templateUrl: './instrument-list.component.html',
  styleUrls: ['./instrument-list.component.css']
})
export class InstrumentListComponent implements OnInit {

  private inst: InstrumentService | undefined;
  public instruments: Instrument[] | undefined;
  public additionPanelDisplay: boolean;

  @Input() nameHolder!: string;
  @Input() categoryHolder!: string;
  @Input() brandHolder!: string;
  @Input() descriptionHolder!: string;
  @Input() quantityHolder!: number;
  @Input() priceHolder!: number;
  @Input() soldHolder!: number;
  @Input() imgPathHolder!: string;

  constructor(
      private instService: InstrumentService,
      private admin: AdminServiceService ) {

    this.inst = this.getInstrumentService();
    this.inst.getTopSellers().subscribe(_data => {
      this.instruments = _data;
    });

    this.resetPanel();
    this.additionPanelDisplay = false
  }
  ngOnInit(): void { }

  private resetPanel() {
    this.nameHolder = "";
    this.categoryHolder = "";
    this.brandHolder = "";
    this.descriptionHolder = "keys1";
    this.quantityHolder = 1;
    this.priceHolder = 1000;
    this.soldHolder = 0;
    this.imgPathHolder = ""
  }

  public getInstrumentService() {
    if (this.inst === undefined)
      return this.inst = this.instService;
    return this.inst;
  }

  addInstrument() {
    this.additionPanelDisplay = !this.additionPanelDisplay;
  }
  
  onDoneAdd() {
    // create Instrument,
    // sent to server
    // add to local 
    var instrument: Instrument = {
      name: this.nameHolder,
      category: this.categoryHolder,
      brand: this.brandHolder,
      description: this.descriptionHolder,
      imgPath: `assets/img/${this.imgPathHolder}.jpg`,
      price: this.priceHolder,
      quantity: this.quantityHolder,
      reviews: [],
      sold: this.soldHolder
    }
    
    this.admin.addInstrument(instrument).subscribe( _data => {
      alert(_data ? "Response in console" : "Response failed")
      console.log(JSON.stringify(_data));
    });
    this.resetPanel();
  }
}