import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainToolbarComponent } from './components/main-toolbar/main-toolbar.component';

// material modules
import { MaterialsModule } from './materials/materials/materials.module';
import {MatStepperModule} from '@angular/material/stepper';


// custom components
import { InstrumentsListComponent } from './components/instruments-list/instruments-list.component';
import { MainGridComponent } from './components/main-grid/main-grid.component';


// services
import { InstrumentService } from './services/instrument.service';
import { UserService } from './services/user.service';
import { StoreService } from './services/store.service';

// js modules
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { InstrumentCardComponent } from './components/instrument-card/instrument-card.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { DialogComponent } from './components/dialog/dialog.component';
import { CartComponent } from './components/cart/cart.component';
import { SearchComponent } from './components/search/search.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { StatsModule } from './stats/stats.module';
import { StatisticsComponent } from './stats/statistics/statistics.component';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard/admin-dashboard.component';
import { AdminDashboardModule } from './admin-dashboard/admin-dashboard.module';


import { FooterComponent } from './components/footer/footer.component';
import { MapComponent } from './components/map/map.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

 
@NgModule({
  declarations: [
    AppComponent,
    MainToolbarComponent,
    InstrumentsListComponent,
    MainGridComponent,
    MainHeaderComponent,
    UserCardComponent,
    InstrumentCardComponent,
    DialogComponent,
    CartComponent,
    SearchComponent,
    NotFoundComponent,

    FooterComponent,
    MapComponent

  ],
  imports: [
    
    StatsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialsModule,
    MatStepperModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AdminDashboardModule,
    RouterModule.forRoot([
      {path: 'admin',
       component: AdminDashboardComponent,
      children : [
        {path:'admin',
        component: AdminDashboardComponent}
      ]
      },
      {path: 'stats',
       component: StatisticsComponent,
      children : [
        {path:'stats',
        component: StatisticsComponent}
      ]
      },
      {path: '', component: MainGridComponent},
      {path: 'cart', component: CartComponent},
      {path: 'search', component: SearchComponent},
      {path: 'admin', component: AdminDashboardComponent},

      {path: 'map', component: MapComponent},

      {path: 'instruments/guitars', component: InstrumentsListComponent},
      {path: 'instruments/drums', component: InstrumentsListComponent},
      {path: 'instruments/keys', component: InstrumentsListComponent},
      {path: 'instruments/dj-gear', component: InstrumentsListComponent},
      {path: 'instruments/accessories', component: InstrumentsListComponent},

      {path: 'brands/fender', component: InstrumentsListComponent},
      {path: 'brands/gibson', component: InstrumentsListComponent},
      {path: 'brands/taylor', component: InstrumentsListComponent},
      {path: 'brands/roland', component: InstrumentsListComponent},
      {path: 'brands/yamaha', component: InstrumentsListComponent},
      {path: 'brands/dw', component: InstrumentsListComponent},
      {path: 'brands/pearl', component: InstrumentsListComponent},
      {path: 'brands/casio', component: InstrumentsListComponent},

      {path: '**', component: NotFoundComponent},
    ]),
    NgbModule,

  ],
  providers: [
     InstrumentService,
     UserService,
     StoreService
     ],
  bootstrap: [AppComponent],
  exports: [StatsModule]
})
export class AppModule { }
