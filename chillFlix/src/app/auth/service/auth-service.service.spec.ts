import { TestBed } from '@angular/core/testing';
import { AuthGuardService } from '../auth-guard/auth-guard.service';
import { JwtHelperService, JwtModule} from '@auth0/angular-jwt';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptorService } from '../interceptor/jwt-interceptor.service';

describe('AuthServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({providers: [AuthGuardService, JwtHelperService, JwtInterceptorService, {
    provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true
  }]}));

  // it('should be created', () => {
  //   const service: AuthServiceService = TestBed.get(AuthServiceService);
  //   expect(service).toBeTruthy();
  // });
});
