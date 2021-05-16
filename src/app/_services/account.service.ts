import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {User} from '../_models';
import {environment} from '../../environments/environment.prod';
import {BookingUser} from '../_models/bookingUser';


@Injectable({ providedIn: 'root' })
export class AccountService {
    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): User {
        return this.userSubject.value;
    }

    public login(email, password, app) {

        const httpOptions = {
            headers: {
                accept  : 'application/json',
                App: app,
                Password: password
            }
        };

        return this.http.put<User>(`${environment.apiUrl}/TutenREST/rest/user/${email}`,{}, httpOptions)
            .pipe(map(user => {
                // store user details and token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                this.userSubject.next(user);
                return user;
            }));
    }

    public logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/account/login']);
    }

    public getBookingUser(referenceEmail: string, current: boolean, app: string) {
        const httpOptions = {
            headers: {
                accept  : 'application/json',
                App: app,
                Adminemail: this.userValue.email
            }
        };
        return this.http.get<[BookingUser]>(
          `${environment.apiUrl}/TutenREST/rest/user/${referenceEmail}/bookings?current=${current}`
          , httpOptions);
    }

}
