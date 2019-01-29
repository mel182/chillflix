import { TestBed } from '@angular/core/testing';
import { JwtHelperService, JwtModule} from '@auth0/angular-jwt';
import { AuthGuardService } from './auth-guard.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptorService } from '../interceptor/jwt-interceptor.service';
import { Router, CanActivate } from '@angular/router';

export function tokenGetter() {
  return '1425sd251x2zx12';
  // return localStorage.getItem('access_token');
}

describe('AuthGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        headerName: 'Authorization'}
    })],
    declarations: [],
    providers: [AuthGuardService, Router, JwtHelperService, {
      provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true
    }]
  }));

  // it('should be created', () => {
  //   const service: AuthGuardService = TestBed.get(AuthGuardService);
  //   expect(service).toBeTruthy();
  // });
});
