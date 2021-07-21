import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Instrument } from '../models/instrument';

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {
  private instrumentsUrl = environment.instrumentUrl;
  
  constructor(private http: HttpClient) { }

  getAllGuitars(): Observable<Instrument[]>{
    let url = this.instrumentsUrl;// + '/' + this.guitar;
    return this.http.get<Instrument[]>(url);
  }
}
