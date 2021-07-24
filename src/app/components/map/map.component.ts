import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { StoreService } from 'src/app/services/store.service';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';
import { Store } from 'src/app/models/store';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  title = "google-maps";
  stores: Store[]=[];
  

constructor(private route: Router, private storeService: StoreService){}

  ngOnInit(): void {
    this.storeService.getAllStores().subscribe(data => this.stores=data);


    // create the loader, how create the map
    let loder= new Loader({
      apiKey: 'AIzaSyCsGqEepigt5YWH7JSf02gSrwggaebBlYQ',
      language: "iw",
    
    })

    // load the map
    loder.load().then(()=>{
      const map= new google.maps.Map(document.getElementById("map")!,{
        center:{lat:32.075131456095036
          ,lng:34.774928773297894
         
        },
        zoom :8,
        
        
      })
      // create the marker
      for (let i=0; i<this.stores.length;i++){
        const marker = new google.maps.Marker({
          position: {lat:this.stores[i].lat, lng: this.stores[i].lng},
        });
        marker.setMap(map);
  
      }
      
          });
    
    
  }

  
  
}

