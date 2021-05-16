import { Component } from '@angular/core';
import {AccountService} from './_services';
import {User} from './_models';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Inbox', icon: 'heart' },
    { title: 'Bookings', url: '/users', icon: 'paper-plane' }
  ];

  isLoggedIn= false;

  constructor(private accountService: AccountService) {
    this.accountService.user.subscribe(x => this.isLoggedIn = true);
  }

  logout() {
    this.accountService.logout();
  }
}
