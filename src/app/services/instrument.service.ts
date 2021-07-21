import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Instrument } from '../models/instrument';

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {
  // guitars:Instrument[] = [];
  // drums:Instrument[] = [];
  // keys:Instrument[] = [];
  // djGear:Instrument[] = [];
  // accessories:Instrument[] = [];

  
  constructor(private http: HttpClient) { }

  getSpecificInstrument(musicalInstrument: String): Observable<Instrument[]>{
    switch (musicalInstrument){

      case 'guitars':{
        return this.http.get<Instrument[]>(environment.guitarsUrl);
      }
      case 'drums':{
        return this.http.get<Instrument[]>(environment.drumsUrl);
      }
      case 'keys':{
        return this.http.get<Instrument[]>(environment.keysUrl);
      }
      case 'dj-gear':{
        return this.http.get<Instrument[]>(environment.djGearUrl);
      }
      default:{
        return this.http.get<Instrument[]>(environment.accessoriesUrl);
      }

    }
  }

}
