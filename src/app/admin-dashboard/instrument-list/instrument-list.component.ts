import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Instrument } from 'src/app/models/instrument';
import { InstrumentService } from 'src/app/services/instrument.service';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-instrument-list',
  templateUrl: './instrument-list.component.html',
  styleUrls: ['./instrument-list.component.css']
})
export class InstrumentListComponent implements OnInit, OnDestroy {

  // private instService: InstrumentService | undefined;

  public instruments: Instrument[];
  subscription!: Subscription;

  totalValue: number = 0;
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
    public admin: AdminServiceService) {

    this.instruments = [];
    this.instService.getAllInstruments().subscribe(_data => {
      this.instruments = _data;
    });

    this.additionPanelDisplay = false;
  }

  ngOnInit(): void {
    this.subscription = this.admin.currentList.subscribe(_newList => {
      this.instruments = _newList;
    })
    this.resetPanel();
  }

  private resetPanel() {
    this.nameHolder = "Instrument's Name";
    this.categoryHolder = "guitars";
    this.brandHolder = "fender";
    this.imgPathHolder = "imgName";
    this.descriptionHolder = "A description...";
    this.quantityHolder = 1;
    this.priceHolder = 1000;
    this.soldHolder = 0;
  }

  public getInstrumentService() {
    if (this.instService === undefined)
      return this.instService = this.instService;
    return this.instService;
  }

  addInstrument() {
    this.additionPanelDisplay = !this.additionPanelDisplay;
  }

  onDoneAdd() {
    var instrument: Instrument = {
      name: this.nameHolder,
      category: this.categoryHolder,
      brand: this.brandHolder,
      description: this.descriptionHolder,
      // imgPath: `assets/img/${this.imgPathHolder}.jpg`,
      imgPath: this.imgPathHolder,
      price: this.priceHolder,
      quantity: this.quantityHolder,
      reviews: [],
      sold: this.soldHolder
    }

    this.admin.addInstrument(instrument).subscribe(_data => {
      instrument._id = _data._id;
      console.log(JSON.stringify(instrument));
      // this.instruments?.push(instrument);
    });
    this.resetPanel();
  }

  public adminAction(_instrument: Instrument): void { // for now its for deletion
    this.admin.deleteInstrument(_instrument).subscribe(_data => {
      if (!_data) alert('Deletion faild');
      // this.instruments = this.instruments?.filter(obj => obj._id != _instrument._id);

    });
  }

  getValue() {
    this.admin.countOfReviews().subscribe((_response: any) => {
      this.totalValue = _response.value;
    });
  }


ngOnDestroy() { }
}