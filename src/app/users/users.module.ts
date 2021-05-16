import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { UsersPageRoutingModule } from './users-routing.module';
import { UsersPage } from './users.page';
import {AgGridModule} from 'ag-grid-angular';
import {AgGridComponent} from '../ag-grid/ag-grid.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsersPageRoutingModule,
    AgGridModule.withComponents([]),
  ],
  declarations: [
    AgGridComponent,
    UsersPage]
})
export class UsersPageModule {}
