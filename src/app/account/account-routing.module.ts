import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountPage } from './account.page';
import {LayoutComponent} from './layout.component';

const routes: Routes = [
  /*{
    path: '',
    component: AccountPage
  }*/
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'login', component: AccountPage }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountPageRoutingModule {}
