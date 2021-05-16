import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AccountService} from "../_services";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private accountService: AccountService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      console.log('llego al guard')
        const user = this.accountService.userValue;
        if (user) {
          console.log('user exist')
            // authorised so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
      console.log('redireccionando a login')
        this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
