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
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { InstrumentCardComponent } from './components/instrument-card/instrument-card.component';

// services
import { InstrumentService } from './services/instrument.service';
import { UserService } from './services/user.service';

// js modules
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { DialogComponent } from './components/dialog/dialog.component';
import { CartComponent } from './components/cart/cart.component';


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
    CartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
     InstrumentService,
     UserService
     ],
  bootstrap: [AppComponent]
})
export class AppModule { }
