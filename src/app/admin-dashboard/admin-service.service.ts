import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Instrument } from '../models/instrument';
import { User } from '../models/user';
import { TokenPayload } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  users:User[] = [];
  instruments:Instrument[] = [];
  
  private usersUrl: string;
  private instrumentsUrl: string;

  
  constructor(private http: HttpClient) { 
    this.usersUrl = environment.userUrl;
    this.instrumentsUrl = environment.instrumentsUrl;
  }

  // Users
  // getUsers(){}
  // deleteUser(_id){}
  // changePassword(_id,_newPassword){} // move to user service
  // makeAdmin(_id){} 

  // Instruments
  // getInstruments(){} // no such api fn
  addInstrument(_instrument: Instrument): Observable<Instrument>{
    alert('alrt from add instrument admin service');
    return this.http.post<Instrument>(this.instrumentsUrl,_instrument);
  }
  // deleteInstrument(_id: string){}
  // updateInstrument(_id: string, _instrument:Instrument){}
  
  // Categories
  // addCategory(_name){}
  // deleteCategory(_name){}
  // changeCategory(_name, _newName){}

  // Stores
  // addBranch(_country:string, _city:string, _street:string, lat:number, lng: number){} // get store schema from itai
  // deleteBranch(_id){}
  // updateBranch(_id){}

  // Orders
  // getOrders(){}
  // addOrder(_order: Order){}
  // updateOrder(_id, _newOrder){}  
  // deleteOrder(_id){}

}
