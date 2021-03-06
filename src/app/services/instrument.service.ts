import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Instrument } from '../models/instrument';
import { MapReduce } from '../models/map-reduce';
import { ScrapeInstrument } from '../models/scrape-instrument';

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {
  
  
  
  constructor(private http: HttpClient) { }

  getAllInstruments(): Observable<Instrument[]>{
    return this.http.get<Instrument[]>(environment.allInstrumentsUrl);
  }

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

  getSpecificBrand(token: string) {
    return this.http.get<Instrument[]>(environment.brandsUrl,
      {
        params:{
          brandKey : token
        }
      });
  }


  getTopSellers(): Observable<Instrument[]>{
    return this.http.get<Instrument[]>(environment.bestSellersUrl);
  }

  getSearchResult(searchInput : string): Observable<Instrument[]> {
    //TODO: searchInput validation.
    return this.http.get<Instrument[]>(environment.searchUrl,
      {
        params:{
          searchKey: searchInput
        }
      });
  }

  getFilterResults(filters : string[]) {
    return this.http.get<Instrument[]>(environment.filterSearchUrl,
      {
        params:{
          searchKey: filters
        }
      });
  }
  
  getRandomSetence() : Observable<ScrapeInstrument[]>{
    return this.http.get<ScrapeInstrument[]>(environment.scrapeOne);
  }


  countOfReviews() : Observable<MapReduce>{
    return this.http.get<MapReduce>(environment.countReviews);
  }
  getBestOffers() : Observable<Instrument[]>{
    return this.http.get<Instrument[]>(environment.bestOffersUrl);

  }
}
