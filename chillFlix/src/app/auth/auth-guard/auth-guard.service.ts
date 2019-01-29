import { Injectable } from '@angular/core';
import { AuthServiceService } from '../service/auth-service.service';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthServiceService, public router:Router) {}

  canActivate():boolean{
   console.log('Can activate auth guard service');

    if(!this.auth.isAuthenticated()){
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }
}
