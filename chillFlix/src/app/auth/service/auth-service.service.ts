import { Injectable } from '@angular/core';
import { JwtHelperService} from '@auth0/angular-jwt';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(public jwtHelper: JwtHelperService) { }

  public isAuthenticated(): boolean
  {
    const token = this.getToken();
    return token === 'null' ? false : this.jwtHelper.isTokenExpired(token);
  }

  public getToken():string{
    return localStorage.getItem('token');
  }

  public setToken(token){
    localStorage.setItem('token',token);
  }

  public clearToken(){
    localStorage.setItem('token',null);
  }


  
}
