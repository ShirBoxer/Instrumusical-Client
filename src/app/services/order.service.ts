import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Order } from '../models/order';
import { Observable } from 'rxjs';
import { Instrument } from '../models/instrument';



@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }
  // {Date.now(),user, new Date(),
  //   supplyTime,this.secondFormGroup.getRawValue().secondCtrl,
  //   this.phoneFormGroup.getRawValue().phoneCtrl,this.totalPrice, this.instruments}

  addOrder(orderParams: { owner: string; orderDate: Date; supplyDate: Date; address: any; phoneNum: any; totalPrice: number; products: Instrument[]; }): Observable<Order>{
    
    return this.http.post<Order>(environment.orderUrl,{
      params :orderParams
    });

  }

}
