import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AccountService} from '../_services';
import {environment} from '../../environments/environment.prod';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private accountService: AccountService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header if user is logged in and request is to the api url
        const user = this.accountService.userValue;
        const isLoggedIn = user && user.sessionTokenBck;
        const isApiUrl = request.url.startsWith(environment.apiUrl);
        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    Token: user.sessionTokenBck
                }
            });
        }

        return next.handle(request);
    }
}
