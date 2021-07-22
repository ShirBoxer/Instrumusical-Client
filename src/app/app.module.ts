import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainToolbarComponent } from './components/main-toolbar/main-toolbar.component';

// material modules
import { MaterialsModule } from './materials/materials/materials.module';

// custom components
import { InstrumentsListComponent } from './components/instruments-list/instruments-list.component';
import { MainGridComponent } from './components/main-grid/main-grid.component';


// services
import { InstrumentService } from './services/instrument.service';
import { UserService } from './services/user.service';

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
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: MainGridComponent},
      {path: 'cart', component: CartComponent},
      {path: 'search', component: SearchComponent},

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

  ],
  providers: [
     InstrumentService,
     UserService
     ],
  bootstrap: [AppComponent]
})
export class AppModule { }
