import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { MaterialsModule } from '../materials/materials/materials.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';
import { InstrumentListComponent } from './instrument-list/instrument-list.component';
import { InstrumentItemComponent } from './instrument-item/instrument-item.component';
import { FormsModule, NgModel, NgForm } from '@angular/forms';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    UserListComponent,
    UserItemComponent,
    InstrumentListComponent,
    InstrumentItemComponent
  ],
  imports: [
    CommonModule,
    MaterialsModule,
    FormsModule //, NgModel, NgForm
  ]
})
export class AdminDashboardModule {
 }
