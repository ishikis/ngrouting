import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private auth: AuthService,
        private router: Router) { }

    canActivate() {

        return this.auth.isAuthenticated()
            .then((authenticate: Boolean) => {
                if (authenticate) { return true; }
                else {
                    this.router.navigate(['/']);
                    return false;
                }
            })

    }
}