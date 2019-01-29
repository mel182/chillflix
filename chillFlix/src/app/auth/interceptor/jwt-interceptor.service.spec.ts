import { TestBed } from '@angular/core/testing';
import { JwtHelperService, JwtModule} from '@auth0/angular-jwt';
import { JwtInterceptorService } from './jwt-interceptor.service';
import { AuthGuardService } from '../auth-guard/auth-guard.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

describe('JwtInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [AuthGuardService, JwtHelperService, JwtInterceptorService, {
      provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true
    }]
  }));

  // it('should be created', () => {
  //   const service: JwtInterceptorService = TestBed.get(JwtInterceptorService);
  //   expect(service).toBeTruthy();
  // });
});
