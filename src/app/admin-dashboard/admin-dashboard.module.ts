import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { MaterialsModule } from '../materials/materials/materials.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';
import { InstrumentListComponent } from './instrument-list/instrument-list.component';
import { InstrumentItemComponent } from './instrument-item/instrument-item.component';
import { FormsModule } from '@angular/forms';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';


const config: SocketIoConfig = { url: environment.adminUrl, options: {} };


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
    FormsModule,
    SocketIoModule.forRoot(config)
  ]
})
export class AdminDashboardModule {
 }
