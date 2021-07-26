import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Instrument } from '../models/instrument';
import { MapReduce } from '../models/map-reduce';


@Injectable({
  providedIn: 'root'
})
export class AdminServiceService implements OnInit {

  private instrumentsUrl: string;
  private usersUrl: string;
  // public users: User[] = [];
  public instruments: Instrument[] = [];

  private source = new BehaviorSubject(this.instruments);
  currentList = this.source.asObservable()

  // Create WebSocket connection.
  private socket;

  private addToList(instrument: Instrument) {
    this.instruments.push(instrument);
    this.source.next(this.instruments);
  }


  
  constructor(private http: HttpClient) {
     this.instrumentsUrl = environment.instrumentsUrl;
     this.usersUrl = environment.userUrl;
    this.getInstruments().subscribe(_data => this.instruments = _data);
    this.socket = new WebSocket('ws://localhost:8003/m4z1edzxh283ylhrazs6');

    this.socket.onmessage = (event) => {
      // console.log('MSG RECIEVED:'); not invoked
      // console.log(event.data);

      var response = JSON.parse(event.data);
      if (response.action == "del") {
        // alert('deleting'); not invoked
        this.instruments = this.instruments.filter((obj: any) => obj._id != response.id);
        this.source.next(this.instruments);
      } else { // response.msg == "inc"
        var data = response.data;
        // var reviews: string[] = [];

        var instrument: Instrument = {
          _id: data[0],
          name: data[1],
          brand: data[2],
          category: data[3],
          imgPath: data[4],
          description: data[5],
          reviews: [],
          quantity: data[7],
          price: data[8],
          sold: data[9]
        }
        this.addToList(instrument)
        for (let i = 0; i < data.length; i++)
          console.log(`response data: ${data[i]}, ${(data[i] ? true : false)}`);
      }
    }
  }

  ngOnInit(){}
  public deleteUser(_id:string): Observable<any>{
    return this.http.delete(`${this.usersUrl}/${_id}`);
  }

  isIn(instrument: Instrument, instrumentList: Instrument[]) {
    for (let inst of instrumentList)
      if (inst._id == instrument._id)
        return true;
    return false;
  }

  public countOfReviews(): Observable<MapReduce>{  
    return this.http.get<MapReduce>(environment.countReviewsUrl);
  }

  
  public getInstruments(): Observable<Instrument[]> {
    return this.http.get<Instrument[]>(`${this.instrumentsUrl}/all`);
  }

  public addInstrument(_instrument: Instrument): Observable<Instrument> {
    return this.http.post<Instrument>(this.instrumentsUrl, _instrument);
  }

  public deleteInstrument(_instrument: Instrument): Observable<any> {
    return this.http.delete(`${this.instrumentsUrl}/${_instrument._id}`);
  }
}
