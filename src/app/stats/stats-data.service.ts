import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PieStats } from '../models/pie-stats';

@Injectable({
  providedIn: 'root'
})
export class StatsDataService {

  constructor(private http: HttpClient) { }

  getBarData(searchWords: String[]) :Observable<PieStats>{
    let params = (new HttpParams()).append('words', searchWords.join(','));
    return this.http.get<PieStats>(environment.barDataUrl,{params : params});
  }
  getScatterData() :Observable<[]>{
    return this.http.get<[]>(environment.scatterDataUrl);
  }
  getPieData() :Observable<[]>{
    return this.http.get<[]>(environment.pieDataUrl);
  }

}
