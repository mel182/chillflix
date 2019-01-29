import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthServiceService } from '../service/auth-service.service';

@Injectable()
export class JwtInterceptorService implements HttpInterceptor{

  constructor(private authService: AuthServiceService) { }
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    // Check if token is valid

    if(this.authService.getToken() != null){
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer '+ this.authService.getToken()
        }
      })
    }
    
    return next.handle(request);
  }
}
