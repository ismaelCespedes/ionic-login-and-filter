import { Component, OnInit } from '@angular/core';
import {first} from 'rxjs/operators';
import {environment} from '../../environments/environment.prod';
import {AccountService} from '../_services';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  referenceEmail = 'contacto@tuten.cl';
  ColumnDefs;
  RowData: any;
  AgLoad: boolean;

  constructor(private accountService: AccountService) {
  }

  ngOnInit() {
    this.GetAgColumns();
    this.loadElements();
  }

  GetAgColumns() {
    this.ColumnDefs = [
      { headerName: 'BookingId', field: 'bookingId', sortable: false, filter: true, resizable: true,
      maxWidth: 80},
      { headerName: 'Cliente', field: 'tutenUserClient', sortable: false, filter: false, resizable: true, width: 90
        ,valueGetter: params => params.data.tutenUserClient.firstName + ' ' + params.data.tutenUserClient.lastName,
      },
      { headerName: 'Fecha de Creación', field: 'bookingTime', sortable: false, filter: false, resizable: true, minWidth: 80},
      { headerName: 'Dirección', field: 'tutenUserProfessional.streetAddress', sortable: false, filter: false,
        resizable: true, minWidth: 120},
      { headerName: 'Precio', field: 'bookingPrice', sortable: false, type: 'numericColumn', filter: 'agNumberColumnFilter'
        ,resizable: true, maxWidth: 90}
    ];
  }

  loadElements() {
    this.accountService.getBookingUser(this.referenceEmail, true, environment.defaultApp)
      .pipe(first())
      .subscribe(bookingUserList =>{
        this.RowData = bookingUserList
        this.AgLoad = true;
      });
  }
}
