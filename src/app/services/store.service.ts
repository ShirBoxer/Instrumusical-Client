import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Store } from '../models/store';

@Injectable({
  providedIn: 'root'
})
export class StoreService{
    constructor(private http : HttpClient){}
    getAllStores():Observable<Store[]>{
        return this.http.get<Store[]>(environment.storeUrl);
    }
}